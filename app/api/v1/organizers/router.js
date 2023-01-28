const express = require("express");
const router = express();
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
} = require("./controller");

router.post("/", createCMSOrganizer);

router.get("/users", getCMSUsers);
module.exports = router;
