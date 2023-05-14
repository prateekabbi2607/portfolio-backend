const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  email: String,
  name: String,
  number: Number,
  address: String,
  description: String,
  resumeURL: String,
  skills: [
    {
      name: String,
      percentage: Number,
    },
  ],
  profilePictureURL: String,
});

const About = new mongoose.model("About", aboutSchema);

module.exports = About;
