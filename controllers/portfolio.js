const Portfolio = require("../models/portfolio");

module.exports.getProjects = async (req, res) => {
  const data = await Portfolio.find();

  if (data) res.status(201).send(data);
};

module.exports.addProject = async (req, res) => {
  const { title, description, gitHubRepo } = req.body;

  const newProject = new Portfolio({ title, description, gitHubRepo });

  newProject.save((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

module.exports.updateProject = async (req, res) => {
  const { title } = req.body;

  const project = await Portfolio.findOne({ title: title });

  if (project) {
    res.status(201).send(project);
  }
};
