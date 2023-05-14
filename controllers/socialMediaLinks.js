const SocialMedia = require("../models/socialMedia");

module.exports.socialMediaLinks = (req, res) => {
  const { linkedIn, github, instagram } = req.body;

  console.table(req.body);

  SocialMedia.updateOne(
    { _id: "62e63d74b2df2e7a4fc8015f" },
    {
      linkedIn,
      github,
      instagram,
    }
  ).then((data) => console.log(data));
};
