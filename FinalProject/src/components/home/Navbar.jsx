import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Home,
  Users,
  Stethoscope,
  Phone,
  LogOut,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setSearchQuery(""); // Clear search bar after navigating
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleLogout = () => {
    // Clear auth token / user data from localStorage or context
    localStorage.removeItem("token");
    // Redirect to login
    navigate("/login");
    // Optionally show a toast/notification
    // toast.success("You have been logged out");
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center ${
      isActive ? "text-green-500 font-semibold" : "text-gray-700"
    } hover:text-green-700 transition-colors`;

  return (
    <header className="bg-gradient-to-r from-green-50 to-green-100 shadow-lg sticky top-0 z-50 border-b border-green-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
          <NavLink to="/">DoctorCare</NavLink>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/home" className={navLinkClass}>
            <Home size={18} className="mr-2" /> Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            <Users size={18} className="mr-2" /> About Us
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            <Stethoscope size={18} className="mr-2" /> Services
          </NavLink>
          <NavLink to="/doctors" className={navLinkClass}>
            <Users size={18} className="mr-2" /> Find a Doctor
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <Phone size={18} className="mr-2" /> Contact Us
          </NavLink>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search doctors, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-green-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all w-64"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-gray-500 hover:text-green-700 transition-colors"
            >
              <Search size={18} />
            </button>
          </form>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center text-red-600 hover:text-red-700 transition-colors"
          >
            <LogOut size={18} className="mr-2" /> Logout
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-green-700 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg animate-slideDown">
          <NavLink
            to="/home"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Home size={18} className="mr-2" /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Users size={18} className="mr-2" /> About Us
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Stethoscope size={18} className="mr-2" /> Services
          </NavLink>
          <NavLink
            to="/doctors"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Users size={18} className="mr-2" /> Find a Doctor
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={18} className="mr-2" /> Contact Us
          </NavLink>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
            className="flex items-center text-red-600 hover:text-red-700 transition-colors"
          >
            <LogOut size={18} className="mr-2" /> Logout
          </button>
          {/* Search in Mobile View */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-green-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-gray-500 hover:text-green-700 transition-colors"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
