const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
