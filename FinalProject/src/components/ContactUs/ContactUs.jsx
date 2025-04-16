import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const ContactUs = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">We'd love to hear from you! Reach out with any questions or concerns.</p>
      </motion.section>

      {/* Contact Form & Details */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 md:p-20 bg-white"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-4">Have a question? We're here to help.</p>
            <p className="text-gray-800 font-semibold">📍 Address:</p>
            <p className="text-gray-600 mb-4">123 Healthcare St, City, Country</p>
            <p className="text-gray-800 font-semibold">📞 Phone:</p>
            <p className="text-gray-600 mb-4">+1 234 567 890</p>
            <p className="text-gray-800 font-semibold">✉️ Email:</p>
            <p className="text-gray-600">support@docbook.com</p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;