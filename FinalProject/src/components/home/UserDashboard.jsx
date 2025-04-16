import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Welcome back, John Doe!</h1>
          <p className="text-xl mb-8 animate-fade-in delay-100">Your Health, Our Priority. Manage everything in one place.</p>
          <Link
            to="/book"
            className="mt-6 inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 animate-fade-in delay-200"
          >
            Book a New Appointment
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-grow space-y-12">

        {/* Quick Actions Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Book Appointment</h3>
            <p className="text-gray-600 mb-6 text-center">Easily book your next doctor visit.</p>
            <Link to="/book" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Book Now</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">View Reports</h3>
            <p className="text-gray-600 mb-6 text-center">Access your lab tests and medical history.</p>
            <Link to="/reports" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">View Reports</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Consult Online</h3>
            <p className="text-gray-600 mb-6 text-center">Connect with specialists online.</p>
            <Link to="/consult" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">Consult Now</Link>
          </div>
        </section>

        {/* Upcoming Appointments Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Your Upcoming Appointments</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div>
                <p className="font-medium text-xl">Dr. Sarah Sharma (Dentist)</p>
                <p className="text-gray-500">March 20, 2025 | 3:00 PM</p>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">Cancel</button>
            </li>
            <li className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div>
                <p className="font-medium text-xl">Dr. Ankit Verma (Cardiologist)</p>
                <p className="text-gray-500">March 25, 2025 | 11:00 AM</p>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">Cancel</button>
            </li>
          </ul>
          <Link to="/appointments" className="block mt-8 text-green-600 hover:underline text-lg">View All Appointments</Link>
        </section>

        {/* Health Insights and Blog */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Health Tips */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Health Tips for You</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-green-600 hover:underline text-lg">5 Tips for a Healthy Heart</a></li>
              <li><a href="#" className="text-green-600 hover:underline text-lg">Boost Your Immunity Naturally</a></li>
              <li><a href="#" className="text-green-600 hover:underline text-lg">Healthy Eating on a Busy Schedule</a></li>
            </ul>
          </div>

          {/* Blogs */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6">From Our Blog</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:underline text-lg">The Importance of Mental Health</a></li>
              <li><a href="#" className="text-blue-600 hover:underline text-lg">Choosing the Right Specialist</a></li>
              <li><a href="#" className="text-blue-600 hover:underline text-lg">Nutrition and Wellness</a></li>
            </ul>
          </div>
        </section>

        

         <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-10 px-6 rounded-2xl shadow-lg mt-10">
  <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Emergency & Contact</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Emergency Number */}
    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="p-3 bg-red-100 rounded-full">
        <PhoneCall className="text-red-500 w-8 h-8" />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800">Emergency Hotline</h4>
        <p className="text-lg font-bold mt-1 text-gray-600">+91 9876543210</p>
      </div>
    </div>

    {/* Email Contact */}
    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="p-3 bg-blue-100 rounded-full">
        <Mail className="text-blue-500 w-8 h-8" />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800">Email Support</h4>
        <p className="mt-1 text-gray-600">support@healthcare.com</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="p-3 bg-green-100 rounded-full">
        <MapPin className="text-green-500 w-8 h-8" />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800">Visit Us</h4>
        <p className="mt-1 text-gray-600">123 Wellness Street, New Delhi, India</p>
      </div>
    </div>
  </div>

  {/* CTA Button */}
  <div className="text-center mt-10">
    <a
      href="tel:+919876543210"
      className="bg-red-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-red-600 transition"
    >
      Call Now
    </a>
  </div>
</section>

        {/* Profile Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-6">Manage Your Profile</h3>
          <p className="text-gray-600 mb-8 text-xl">Update your medical history, preferences, and more.</p>
          <Link
            to="/profile"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Profile
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;