const activityModel = require("../model/activitiesmodel");
const express = require("express");
const router = express.Router();
/*get all cities*/
router.get("/", (req, res) => {
  activityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});
module.exports = router;

router.get("/:itineraryid", (req, res) => {
  let itineraryRequested = req.params.itineraryid;
  activityModel
    .find({ itineraryid: itineraryRequested })
    .then(activities => {
      res.send(activities);
    })
    .catch(err => console.log(err));
});
