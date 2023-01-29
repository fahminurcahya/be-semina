const express = require("express");
const router = express();
const { create } = require("./controller");
const upload = require("../../../middlewares/multer");
const { authenticateUser } = require("../../../middlewares/auth");

router.post("/", upload.single("avatar"), create);
module.exports = router;
