const userModel = require("../model/usermodel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

router.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  userModel.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });

    // validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token: token,
            user: {
              id: user.id,
              email: user.email,
              username: user.username,
              name: user.name,
              picture: user.picture
            }
          });
        }
      );
    });
  });
});

router.post("/auth/:userid", (req, res) => {
  let userRequested = req.params.userid;
  userModel
    .findById({ _id: userRequested })
    .then(user => {
      res.send(user);
    })
    .catch(err => console.log(err));
});

module.exports = router;
