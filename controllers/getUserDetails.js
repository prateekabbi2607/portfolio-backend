const About = require("../models/about");
const Resume = require("../models/resume");
const SocialMediaLinks = require("../models/socialMedia");

module.exports.getAboutDetails = async (req, res) => {
  const data = await About.findOne({ id: "62da3f7034d868eb93201660" });

  res.status(200).send(data);
};

module.exports.getResumeDetails = async (req, res) => {
  const data = await Resume.findOne({ id: "62e50591b7cf70ba08dd6d53" });

  res.status(200).send(data);
};

module.exports.getSocialMediaLinks = async (req, res) => {
  const data = await SocialMediaLinks.findOne({
    id: "62e63d74b2df2e7a4fc8015f",
  });

  res.status(200).send(data);
};
