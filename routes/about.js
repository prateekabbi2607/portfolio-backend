const router = require("express").Router();

const about = require("../controllers/about");

const userDetails = require("../controllers/getUserDetails");

router.put("/about", about.about);
router.put("/updateSkill", about.updateSkill);
router.put("/deleteSkill", about.deleteSkill);

router.get("/aboutDetails", userDetails.getAboutDetails);

module.exports = router;
