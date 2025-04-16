import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-green-600 text-white py-20 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Our Healthcare Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At DoctorCare, we offer a wide range of healthcare services to meet your needs — anytime, anywhere.
        </p>
      </motion.section>

      {/* Services List Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "General Consultation",
              description:
                "Connect with experienced general physicians for health advice, prescriptions, and routine check-ups.",
              icon: "🩺",
            },
            {
              title: "Specialist Consultation",
              description:
                "Book appointments with specialists such as cardiologists, dermatologists, and neurologists.",
              icon: "👨‍⚕️",
            },
            {
              title: "Pediatrics",
              description:
                "Dedicated care for children, from newborns to teenagers, including immunizations and growth monitoring.",
              icon: "👶",
            },
            {
              title: "Mental Health Counseling",
              description:
                "Confidential mental health support, therapy sessions, and counseling from certified psychologists.",
              icon: "🧠",
            },
            {
              title: "Diagnostic Lab Tests",
              description:
                "Book lab tests online and receive reports digitally without the hassle of visiting clinics.",
              icon: "🔬",
            },
            {
              title: "Home Care Services",
              description:
                "Get medical care at home, including nursing, elder care, and post-surgical care.",
              icon: "🏠",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-green-50 py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Availability",
                description: "Access healthcare services anytime, day or night.",
                icon: "⏰",
              },
              {
                title: "Expert Doctors",
                description: "Consult with highly qualified and experienced doctors.",
                icon: "👩‍⚕️",
              },
              {
                title: "Affordable Pricing",
                description: "Get quality healthcare at competitive prices.",
                icon: "💰",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Bhuvii",
              comment:
                "DoctorCare made it so easy to book an appointment. The doctor was very professional and helpful.",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sahil",
              comment:
                "I had a great experience with the mental health counseling service. Highly recommend!",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Robert Brown",
              comment:
                "The home care services were a lifesaver for my elderly parents. Thank you, DoctorCare!",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-green-600 py-16 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Consult a Doctor?</h2>
        <p className="text-white text-lg mb-8">
          Get started today and experience hassle-free healthcare at your fingertips.
        </p>
        <a
          href="/login"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-50 transition"
        >
          Book a Consultation
        </a>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Services;