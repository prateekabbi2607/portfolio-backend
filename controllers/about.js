const About = require("../models/about");

module.exports.about = (req, res) => {
  const { email, name, number, address, description, resumeURL, skillsArray } =
    req.body;

  if (Object.keys(skillsArray).length) {
    About.updateOne(
      {
        _id: "62da3f7034d868eb93201660",
      },
      {
        email,
        name,
        number,
        address,
        description,
        resumeURL,
        $push: {
          skillsArray,
        },
        profilePictureURL: req.body.profilePictureURL,
      },
      (err, data) => {
        if (err) {
          console.log(err);
          res.status(404).send("Some error occured, Please try again!");
        } else {
          console.log(data);
          res.status(200).send("Updated successfully");
        }
      }
    );
  }
};

module.exports.updateSkill = async (req, res) => {
  const { skillId, percentage } = req.body;

  const data = await About.findById("62da3f7034d868eb93201660");

  data.skills.forEach((ele) => {
    if (ele._id == skillId) {
      ele.percentage = percentage;
    }
  });
  data.save();
};

module.exports.deleteSkill = async (req, res) => {
  const data = await About.findById("62da3f7034d868eb93201660");
  data.skills.forEach((ele) => {
    if (ele._id == req.body.id) {
      const index = data.skills.findIndex((ele) => ele._id == req.body.id);
      data.skills.splice(index, 1);
    }
  });
  data.save();
};
