const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['patient', 'doctor', 'admin'], default: 'patient' },
    approved: { type: Boolean, default: false },
    specialization: String,
    licenseNumber: String,
    yearsOfExperience: Number,
    clinicName: String,
  });
  

  module.exports = mongoose.model('User', userSchema);