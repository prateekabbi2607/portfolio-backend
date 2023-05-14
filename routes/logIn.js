const router = require("express").Router();
const passport = require("passport");

const logIn = require("../controllers/logIn").logIn;
const changePassword = require("../controllers/logIn").changePassword;

router.post("/logIn", passport.authenticate("local"), logIn);
router.post("/changePassword", changePassword);

module.exports = router;
