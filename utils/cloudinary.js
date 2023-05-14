const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "prateekabbi",
  api_key: 149524286291751,
  api_secret: "_gkKPxCOBOP6St43T7AsayTIx9o",
});

module.exports = cloudinary;
