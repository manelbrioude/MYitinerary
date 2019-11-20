const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  itineraryid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  addres: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("activity", activitySchema);
