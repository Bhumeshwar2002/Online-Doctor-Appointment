import React, { useState } from "react";
import Navbar from "../home/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. John Doe", specialty: "Cardiologist", location: "New York", img: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Dr. Jane Smith", specialty: "Dermatologist", location: "Los Angeles", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Dr. Emily Johnson", specialty: "Pediatrician", location: "Chicago", img: "https://randomuser.me/api/portraits/women/52.jpg" },
  { name: "Dr. Mark Wilson", specialty: "Orthopedic", location: "Houston", img: "https://randomuser.me/api/portraits/men/55.jpg" }
];

const FindDoctor = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doctor.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-gradient-to-r from-blue-50 to-white text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find a Doctor</h1>
        <p className="text-gray-600 text-lg">Search for top-rated doctors in your area and book an appointment today.</p>
        <input
          type="text"
          placeholder="Search by name, specialty, or location"
          className="mt-6 p-3 w-full md:w-1/2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.section>

      {/* Doctor List Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="text-gray-500 mb-4">{doctor.location}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Book Appointment
                </button>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">No doctors found.</p>
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default FindDoctor;
