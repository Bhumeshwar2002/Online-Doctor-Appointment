const Appointment = require("../models/Appointment");
const Patient = require("../models/Patient");

exports.getAppointmentsByDoctor = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const appointments = await Appointment.find({ doctorId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPatientsByDoctor = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const patients = await Patient.find({ doctorId });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
