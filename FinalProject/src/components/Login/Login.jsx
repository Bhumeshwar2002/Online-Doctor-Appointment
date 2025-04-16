import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
      role,
    });

    const { token, user } = response.data;

    // Optional role mismatch check – replace with secure message
    if (user.role !== role) {
      toast.error("Invalid email, password, or role.");
      return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    toast.success(`Welcome, ${user.fullName || user.role}!`);

    if (user.role === "doctor") {
      navigate("/doctor-dashboard");
    } else if (user.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/home");
    }

  } catch (err) {
    toast.error(err.response?.data?.msg || "Login failed");
  }
};

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Login as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
          <div className="text-center">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
