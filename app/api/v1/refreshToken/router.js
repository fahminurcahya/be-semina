const express = require("express");
const router = express();
const { index } = require("./controller");
// const {
//   authenticateUser,
//   authorizeRoles,
// } = require('../../../middlewares/auth');

router.get(
  "/:refreshToken",
  // authenticateUser,
  // authorizeRoles('organizer', 'admin', 'owner'),
  index
);

module.exports = router;
