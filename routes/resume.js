const router = require("express").Router();

const resume = require("../controllers/resume");

const userDetails = require("../controllers/getUserDetails");

router.put("/resume", resume.resume);
// router.put("/updateSkill", about.updateSkill);
// router.put("/deleteSkill", about.deleteSkill);

router.get("/resumeDetails", userDetails.getResumeDetails);

module.exports = router;
