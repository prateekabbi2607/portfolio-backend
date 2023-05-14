const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  education: [
    {
      organization: String,
      year: String,
      title: String,
      description: String,
    },
  ],
  experience: [
    {
      organization: String,
      year: String,
      title: String,
      description: String,
    },
  ],
});

const Resume = new mongoose.model("Resume", resumeSchema);

module.exports = Resume;
