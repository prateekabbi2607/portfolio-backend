const router = require("express").Router();

const portfolio = require("../controllers/portfolio");

router.post("/addProjects", portfolio.addProject);
router.post("/updateProject", portfolio.updateProject);
router.get("/getProjects", portfolio.getProjects);

module.exports = router;
