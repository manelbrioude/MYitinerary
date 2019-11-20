const commentModel = require("../model/commentmodel");
const express = require("express");
const router = express.Router();
/*get all comments*/
router.get("/", (req, res) => {
  commentModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.get("/:itineraryid", (req, res) => {
  let itineraryRequested = req.params.itineraryid;
  commentModel
    .find({ itineraryid: itineraryRequested })
    .then(comments => {
      res.send(comments);
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  console.log("hola");
  let newComment = new commentModel({
    itineraryid: req.body.itineraryid,
    user: req.body.user,
    userpicture: req.body.userpicture,
    comment: req.body.comment
  });
  console.log(req.body);
  newComment.save().then(comment => {
    res.send(comment);
  });
});

module.exports = router;
