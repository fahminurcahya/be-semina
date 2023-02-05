const express = require("express");
const router = express();
const {
  getAllLandingPage,
  getDetailLandingPage,
  signup,
  signin,
  activeParticipant,
  getDashboard,
  getAllPayment,
  checkout,
} = require("./controller");

const { authenticateParticipant } = require("../../../middlewares/auth");

router.get("/events", getAllLandingPage);
router.get("/events/:id", getDetailLandingPage);
router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.put("/active", activeParticipant);
router.get("/orders", authenticateParticipant, getDashboard);
router.get("/payments/:organizer", authenticateParticipant, getAllPayment);
router.post("/checkout", authenticateParticipant, checkout);

module.exports = router;
