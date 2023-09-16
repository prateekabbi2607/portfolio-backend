const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
require("dotenv/config");

const app = express();

// const corsOptions = {
//   origin: "https://prateekabbi.herokuapp.com/",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://admin-Prateek:Prateek2607@cluster0.amlc0.mongodb.net/portfolioDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function () {
    console.log("Database connected");
  }
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(
  session({
    secret: "This is the little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/loginApi", require("./routes/logIn"));
app.use("/changePasswordApi", require("./routes/logIn"));
app.use("/aboutApi", require("./routes/about"));
app.use("/resumeApi", require("./routes/resume"));
app.use("/socialMediaApi", require("./routes/socialMediaLinks"));
app.use("/portfolioApi", require("./routes/portfolio"));
app.use("/uploadImage", require("./routes/uploadImage"));
app.use("/messagesApi", require("./routes/contactMe"));

app.get("/", (req, res) => {
  res.send("API is running..");
});

let port = 5000;

app.listen(port, function () {
  console.log(`Server running on port ${port}.`);
});
