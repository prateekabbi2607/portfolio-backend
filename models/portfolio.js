const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  gitHubRepo: String,
  imageURL: Array,
});

const Portfolio = new mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
