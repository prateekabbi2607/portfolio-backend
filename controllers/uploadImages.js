const cloudinary = require("../utils/cloudinary");

const About = require("../models/about");

module.exports.aboutImage = async (req, res) => {
  const path = req.file.path;
  const result = await cloudinary.uploader.upload(path, {
    folder: "user/",
  });

  About.updateOne(
    { _id: "62da3f7034d868eb93201660" },
    {
      profilePictureURL: result.url,
    }
  ).then((data) => res.send(data));
};
