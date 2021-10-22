const { Router } = require("express");
const { indexPage } = require("../controllers");

const router = Router();

router.get("/", indexPage);

module.exports = router;