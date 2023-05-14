const Contact = require("../models/contactMe");

module.exports.saveMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  const newMessage = new Contact({ name, email, subject, message });

  newMessage.save((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

module.exports.getMessage = async (req, res) => {
  const data = await Contact.find();

  if (data) {
    res.status(201).send(data);
  }
};
