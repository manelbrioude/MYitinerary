const cityModel = require("../model/citymodel");
const express = require("express");
const router = express.Router();
/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;

router.get("/:city", (req, res) => {
  console.log(req.body);
  let cityRequested = req.params.city;
  cityModel
    .findOne({ city: cityRequested })
    .then(city => {
      res.send(city);
    })
    .catch(err => console.log(err));

  module.exports = router;
});

router.post("/", (req, res) => {
  var exists = 0;
  const newCity = new cityModel({
    city: req.body.city,
    country: req.body.country
  });

  cityModel.find({}).then(files => {
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
