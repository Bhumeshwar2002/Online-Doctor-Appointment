const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: String,
  patientName: String,
  date: Date,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
