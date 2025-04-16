import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-gradient-to-r from-blue-50 to-white"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg">
            We are revolutionizing healthcare by making it easy, fast, and accessible for everyone.
          </p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            DocBook was founded in 2023 with a simple mission: to make healthcare accessible to everyone, everywhere. Our journey began when our founder, Dr. Jane Smith, noticed the challenges patients faced in booking appointments and accessing quality care.
          </p>
          <p className="text-gray-600">
            Today, we are proud to serve thousands of patients and doctors across the globe, providing a seamless platform for online consultations, appointment bookings, and more.
          </p>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-gradient-to-r from-blue-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to empower patients and doctors by providing a platform that simplifies healthcare delivery. We believe in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Accessibility", desc: "Making healthcare accessible to everyone, everywhere.", icon: "🚀" },
              { title: "Quality", desc: "Ensuring the highest standards of care.", icon: "🌟" },
              { title: "Innovation", desc: "Using technology to improve healthcare delivery.", icon: "💡" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Meet the Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
          <p className="text-gray-600 mb-8">
            Our team is made up of passionate individuals dedicated to transforming healthcare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Jane Smith", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "John Doe", role: "CTO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Emily Johnson", role: "Head of Operations", img: "https://randomuser.me/api/portraits/women/65.jpg" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-gradient-to-r from-blue-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "24/7 Support", desc: "We are always here to help you with any questions or concerns.", icon: "📞" },
              { title: "Trusted Doctors", desc: "All doctors on our platform are verified and highly qualified.", icon: "👨‍⚕️" },
              { title: "Easy Booking", desc: "Book appointments in just a few clicks.", icon: "📅" },
              { title: "Affordable Care", desc: "We offer competitive pricing for all services.", icon: "💰" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "10,000+", desc: "Patients Served" },
              { title: "500+", desc: "Verified Doctors" },
              { title: "24/7", desc: "Support Availability" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center"
      >
        <h2 className="text-3xl font-bold">Join Us Today</h2>
        <p className="mt-4">Experience the future of healthcare with DocBook.</p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-8 py-3 mt-6 inline-block rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Sign Up Now
        </Link>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutUs;