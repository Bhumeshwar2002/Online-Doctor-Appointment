import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, UserPlus, Calendar } from "lucide-react";

const HomePage = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
      };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">DocBook</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-gray-700 font-medium hover:text-blue-600">
            Login
          </Link>
          <Link to="/signup" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between p-10 md:p-20">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Book Your Doctor Appointments Online
          </h2>
          <p className="text-gray-600 text-lg">
            Find top-rated doctors and specialists in just a few clicks. Save time, avoid queues, and consult the best from your home.
          </p>
          <div className="space-x-4">
            <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Book Now
            </Link>
            <Link to="/signup" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
              Join Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
            alt="Doctor Appointment"
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-10 md:p-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 border rounded-xl shadow-md bg-gray-50">
            <h4 className="text-xl font-semibold mb-4 text-blue-600">Instant Online Booking</h4>
            <p className="text-gray-600">
              Easily book appointments with just a few clicks. Avoid waiting lines and book anytime.
            </p>
          </div>
          {/* Service 2 */}
          <div className="p-6 border rounded-xl shadow-md bg-gray-50">
            <h4 className="text-xl font-semibold mb-4 text-green-600">Specialist Consultations</h4>
            <p className="text-gray-600">
              Connect with top-rated specialists including dermatologists, cardiologists, dentists, and more.
            </p>
          </div>
          {/* Service 3 */}
          <div className="p-6 border rounded-xl shadow-md bg-gray-50">
            <h4 className="text-xl font-semibold mb-4 text-purple-600">Online Reports</h4>
            <p className="text-gray-600">
              Access all your reports and prescriptions securely online anytime, anywhere.
            </p>
          </div>
          {/* Service 4 */}
          <div className="p-6 border rounded-xl shadow-md bg-gray-50">
            <h4 className="text-xl font-semibold mb-4 text-yellow-600">Video & Audio Consultations</h4>
            <p className="text-gray-600">
              Talk to doctors through secure video/audio calls from the comfort of your home.
            </p>
          </div>
          {/* Service 5 */}
          <div className="p-6 border rounded-xl shadow-md bg-gray-50">
            <h4 className="text-xl font-semibold mb-4 text-red-600">24/7 Customer Support</h4>
            <p className="text-gray-600">
              We are here to assist you any time of the day with our dedicated customer service.
            </p>
          </div>
          {/* Service 6 */}
          <div className="p-6 border rounded-xl shadow-md bg-gray-50">
            <h4 className="text-xl font-semibold mb-4 text-indigo-600">Health Packages</h4>
            <p className="text-gray-600">
              Affordable health checkup packages tailored for all your needs.
            </p>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="p-10 bg-blue-50">
        <h3 className="text-3xl font-bold text-center mb-10">What Our Patients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Bhuvii", comment: "DocBook helped me book a doctor within minutes. The experience was seamless and very professional.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sahil", comment: "I had a video consultation with a specialist, and it saved me so much time. Highly recommend!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Mukesh", comment: "Great platform! Easy to use, and the doctors are very cooperative.", img: "https://randomuser.me/api/portraits/men/45.jpg" },
          ].map((review, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-md text-center">
              <img src={review.img} alt={review.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold">{review.name}</h4>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="p-10 md:p-20 bg-white">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { q: "How do I book an appointment?", a: "Sign up, search for doctors, and book an available slot." },
            { q: "Are video consultations available?", a: "Yes, you can choose between video, audio, or in-person consultations." },
            { q: "Is my information secure?", a: "We use top-level encryption to keep your data private and secure." },
          ].map((faq, idx) => (
            <div key={idx} className="border-b pb-4 cursor-pointer" onClick={() => toggleFAQ(idx)}>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">{faq.q}</h4>
                {openFAQ === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openFAQ === idx && <p className="text-gray-600 mt-2">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="p-10 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold">Ready to Consult Your Doctor?</h3>
        <p className="mt-4">Sign up now and take charge of your health!</p>
        <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 mt-6 inline-block rounded-lg font-semibold hover:bg-gray-100">
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
