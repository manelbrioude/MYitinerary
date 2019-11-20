const userModel = require("../model/usermodel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
    );
  }
});
const upload = multer({ storage: storage });

/*get all users*/
router.get("/", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;

router.post("/", upload.single("picture"), (req, res) => {
  const { email, username, password, name } = req.body;
  const picture = req.file.path;

  if (!email || !username || !password || !name) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  userModel.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new userModel({
      email,
      username,
      password,
      name,
      picture
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
            if (err) throw err;

            res.json({
              token: token,
              user: {
                id: user.id,
                email: user.email,
                username: user.username,
                name: user.name,
                picture: user.picture,
                favourites: []
              }
            });
          });
        });
      });
    });
  });
});

router.put("/:id", (req, res) => {
  const _id = req.params.id;
  const favouriteItin = req.body.favourites;
  console.log(req.body);

  userModel
    .findByIdAndUpdate({ _id }, { $push: { favourites: favouriteItin } })
    .then(user => res.send(user));
});

router.put("/erase/:id", (req, res) => {
  const _id = req.params.id;
  const favouriteItin = req.body.favourites;

  userModel
    .findByIdAndUpdate({ _id }, { $pull: { favourites: favouriteItin } })
    .then(user => res.send(user));
});

router.get("/favourites/:id", (req, res) => {
  let userid = req.params.id;
  console.log(req.params.id);

  userModel.findById({ userid }).then(files => {
    res.send(files);
    console.log(files);
  });
});
module.exports = router;
