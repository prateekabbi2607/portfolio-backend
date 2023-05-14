const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  recentworks: [
    {
      title: String,
      description: String,
      imageURL: Array,
    },
  ],
});

const Portfolio = new mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
