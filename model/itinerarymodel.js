const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  cityid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  usernick: {
    type: String,
    required: true
  },
  userpic: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  hashtag: {
    type: Array,
    required: true
  }
});
module.exports = mongoose.model("itinerary", itinerarySchema);
