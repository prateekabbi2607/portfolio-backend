const router = require("express").Router();

const uploadAboutImage = require("../controllers/uploadImages").aboutImage;
const multer = require("../utils/multer").upload;

router.put("/uploadAboutImage", multer.single("myFile"), uploadAboutImage);

module.exports = router;
