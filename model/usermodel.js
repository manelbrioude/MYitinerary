const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  favourites: {
    type: Array,
    required: false
  }
});
module.exports = mongoose.model("user", userSchema);
