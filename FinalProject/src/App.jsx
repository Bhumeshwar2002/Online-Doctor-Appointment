import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/Login";
import SignupPage from "./components/Signup/Signup";
import HomePage from "./components/home/Home";
import ForgotPasswordPage from "./components/Login/Forgotpassword";
import UserDashboard from "./components/home/UserDashboard";
import AboutUs from "./components/AboutUs/Aboutus";
import Services from "./components/Services/Services";
import FindDoctorPage from "./components/FindDoctor/FindDoctor";
import ContactUs from "./components/ContactUs/ContactUs";
import DoctorDashboard from "./components/home/DoctorDashboard";
import AdminDashboard from "./components/home/AdminDashboard";
import DoctorAppointments from "./components/home/Doctor/Appointment";
import DoctorPatients from "./components/home/Doctor/Patient";
import DoctorProfile from "./components/home/Doctor/Profile";
import ProtectedRoute from "./components/home/Doctor/ProtectRoute";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<ProtectedRoute> <UserDashboard /></ProtectedRoute>} />
        {/* <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> */}
        <Route path="/doctor-dashboard" element={ <ProtectedRoute> <DoctorDashboard /> </ProtectedRoute>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/doctors" element={<FindDoctorPage />} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/patients" element={<DoctorPatients />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
