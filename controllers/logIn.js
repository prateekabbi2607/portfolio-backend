const passport = require("passport");
const User = require("../models/user");

passport.use(User.createStrategy("local"));
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports.logIn = async (req, res) => {
  const { username, password } = req.body;
  console.table(req.body);

  const user = new User({
    username,
    password,
  });

  req.logIn(user, (err) => {
    if (!err) {
      passport.authenticate("local")(req, res, () => {
        console.log("Log In successfull");
        res.json({
          username,
        });
      });
    } else {
      console.log(err);
    }
  });
};

module.exports.changePassword = async (req, res) => {
  const user = await User.findOne();

  console.log(user);

  if (user) {
    user.setPassword(req.body.password, function () {
      user.save();
      res.send("Password Changed Succesfully!!!");
    });
  }
};
