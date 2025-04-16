const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  doctorId: String,
  name: String,
  email: String,
});

module.exports = mongoose.model("Patient", patientSchema);
