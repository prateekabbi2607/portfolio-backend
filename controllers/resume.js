const Resume = require("../models/resume");

module.exports.resume = (req, res) => {
  const { year, title, organization, description, experience } = req.body;

  console.table(req.body);

  if (experience == true) {
    Resume.updateOne(
      { _id: "62e50591b7cf70ba08dd6d53" },
      {
        $push: {
          experience: {
            organization,
            year,
            title,
            description,
          },
        },
      }
    ).then((data) => console.log(data));
  }

  if (!experience) {
    Resume.updateOne(
      { _id: "62e50591b7cf70ba08dd6d53" },
      {
        $push: {
          education: {
            organization,
            year,
            title,
            description,
          },
        },
      }
    ).then((data) => console.log(data));
  }
};
