const express = require("express");
const router = express();

const { create, index, find, update, destroy } = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get("/categories", authenticateUser, index);
router.get("/categories/:id", authenticateUser, find);
router.put("/categories/:id", authenticateUser, update);
router.post("/categories", authenticateUser, create);
router.delete("/categories/:id", authenticateUser, destroy);

module.exports = router;
