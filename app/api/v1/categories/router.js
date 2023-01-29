const express = require("express");
const router = express();

const { create, index, find, update, destroy } = require("./controller");

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get("/categories", index);
router.get("/categories/:id", find);
router.put("/categories/:id", update);
router.post("/categories", create);
router.delete("/categories/:id", destroy);

module.exports = router;
