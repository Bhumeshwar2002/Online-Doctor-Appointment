const express = require("express");
const router = express.Router();
const {
  getAppointmentsByDoctor,
  getPatientsByDoctor,
} = require("../controllers/doctorController");

const verifyToken = require("../middleware/authMiddleware");

router.get("/appointments/:doctorId", verifyToken, getAppointmentsByDoctor);
router.get("/patients/:doctorId", verifyToken, getPatientsByDoctor);

module.exports = router;
