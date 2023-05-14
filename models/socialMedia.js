const mongoose = require("mongoose");

const socialMediaLinksSchema = new mongoose.Schema({
  linkedIn: String,
  github: String,
  instagram: String,
});

const SocialMediaLinks = new mongoose.model(
  "SocialMediaLinks",
  socialMediaLinksSchema
);

module.exports = SocialMediaLinks;
