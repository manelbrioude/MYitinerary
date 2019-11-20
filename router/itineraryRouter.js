const itineraryModel = require("../model/itinerarymodel");
const UserModel = require("../model/usermodel");
const express = require("express");
const router = express.Router();
/*get all cities*/
router.get("/", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});
module.exports = router;

// router.get("/:itineraryid", (req, res) => {
//   let itineraryRequested = req.params.itineraryid;
//   itineraryModel
//     .find({ _id: itineraryRequested })
//     .then(itineraries => {
//       console.log(itineraries);
//       res.send(itineraries);
//     })
//     .catch(err => console.log(err));
// });

router.get("/:cityid", (req, res) => {
  let cityRequested = req.params.cityid;
  itineraryModel
    .find({ cityid: cityRequested })
    .then(itineraries => {
      res.send(itineraries);
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  var exists = 0;
  const newCity = new itineraryModel({
    city: req.body.city,
    country: req.body.country
  });

  itineraryModel.find({}).then(files => {
    for (i = 0; i < files.length; i++) {
      if (files[i].city == newCity.city) {
        exists = 1;
      }
    }
    if (exists == 1) {
      console.log("this city exists");
    } else {
      newCity
        .save()
        .then(city => {
          res.send(city);
        })
        .catch(err => {
          res.status(500).send("Server error");
        });
    }
  });
});

router.get("/favourites/:id", (req, res) => {
  let userid = req.params.id;

  userModel.findById({ userid }).then(files => {
    res.send(files);
    console.log(files);
  });
});
