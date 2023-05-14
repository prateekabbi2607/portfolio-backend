const router = require("express").Router();

const socialMediaLinks = require("../controllers/socialMediaLinks");

const userDetails = require("../controllers/getUserDetails");

router.put("/socialMediaLinks", socialMediaLinks.socialMediaLinks);

router.get("/socialMediaLinksDetails", userDetails.getSocialMediaLinks);

module.exports = router;
