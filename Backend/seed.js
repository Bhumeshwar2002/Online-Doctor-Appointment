const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Appointment = require("./models/Appointment");
const Patient = require("./models/Patient");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    const doctorId = "doctor123"; // mock doctor ID

    await Appointment.deleteMany({});
    await Patient.deleteMany({});

    await Appointment.insertMany([
      { doctorId, patientName: "John Doe", date: new Date() },
      { doctorId, patientName: "Jane Smith", date: new Date(Date.now() + 86400000) },
    ]);

    await Patient.insertMany([
      { doctorId, name: "John Doe", email: "john@example.com" },
      { doctorId, name: "Jane Smith", email: "jane@example.com" },
    ]);

    console.log("Seed data inserted");
    process.exit();
  })
  .catch((err) => console.log(err));
