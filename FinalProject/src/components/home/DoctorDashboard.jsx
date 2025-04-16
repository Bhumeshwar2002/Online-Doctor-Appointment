import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Stethoscope, CalendarCheck, Users, FileText } from "lucide-react";

const DoctorDashboard = () => {
  const [stats, setStats] = useState({
    appointmentsToday: 0,
    totalPatients: 0,
    reportsReviewed: 0,
    pendingTasks: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found in localStorage.");
        return;
      }

      let doctorId;
      try {
        const base64Payload = token.split(".")[1];
        const payload = JSON.parse(atob(base64Payload));
        doctorId = payload.userId;
      } catch (error) {
        console.error("Error decoding JWT:", error);
        return;
      }

      try {
        const appointmentsRes = await axios.get(
          `http://localhost:5000/api/doctor/appointments/${doctorId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const patientsRes = await axios.get(
          `http://localhost:5000/api/doctor/patients/${doctorId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setStats({
          appointmentsToday: appointmentsRes.data.length,
          totalPatients: patientsRes.data.length,
          reportsReviewed: 36,
          pendingTasks: 2,
        });
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-indigo-700 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Doctor Portal</h1>
        <div className="flex items-center gap-4">
          <span className="text-white font-medium hidden sm:block">Dr. Smith</span>
          {/* Replaced image with logout button */}
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-700 px-4 py-1 rounded-full font-medium hover:bg-indigo-100 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 px-6 md:px-20 text-center" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Welcome, <span className="text-indigo-700">Doctor</span>!
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Review appointments, manage patient records, and stay organized.
        </p>
        <Link
          to="/doctor/appointments"
          className="inline-flex items-center gap-2 bg-indigo-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <CalendarCheck className="w-5 h-5" />
          View Appointments
        </Link>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-20 py-10 bg-gray-50" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard title="Appointments Today" count={stats.appointmentsToday} icon={<CalendarCheck />} color="indigo" />
          <StatCard title="Total Patients" count={stats.totalPatients} icon={<Users />} color="green" />
          <StatCard title="Reports Reviewed" count={stats.reportsReviewed} icon={<FileText />} color="blue" />
          <StatCard title="Pending Tasks" count={stats.pendingTasks} icon={<Stethoscope />} color="rose" />
        </div>
      </section>

      {/* Feedback Section */}
      <section className="px-6 md:px-20 pb-20" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">Patient Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ name: "Ravi S.", review: "Dr. Smith is extremely kind and helpful!" },
            { name: "Priya M.", review: "Great diagnosis and clear explanation!" },
            { name: "Manoj P.", review: "Very professional and friendly approach." }].map(({ name, review }) => (
            <div key={name} className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="italic text-gray-600 mb-4">"{review}"</p>
              <span className="font-semibold text-indigo-700">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ title, count, icon, color }) => (
  <div className={`bg-${color}-100 text-${color}-800 p-6 rounded-xl shadow hover:shadow-xl transition`}>
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="bg-white p-2 rounded-full shadow">{icon}</div>
    </div>
    <p className="text-3xl font-bold mt-4">{count}</p>
  </div>
);

export default DoctorDashboard;
