const router = require("express").Router();

const messages = require("../controllers/contactMe");

router.post("/newMessage", messages.saveMessage);
router.get("/getMessages", messages.getMessage);

module.exports = router;
