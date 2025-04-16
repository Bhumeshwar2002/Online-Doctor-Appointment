const Footer = () => {
  return (
    <footer className="p-6 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About DocBook</h4>
          <p className="text-gray-300">
            DocBook is your trusted platform to connect with experienced doctors and healthcare professionals. Book appointments seamlessly and manage your health online.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/signup" className="hover:underline">Sign Up</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-300">Email: support@docbook.com</p>
          <p className="text-gray-300">Phone: +123 456 7890</p>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8">&copy; {new Date().getFullYear()} DocBook. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
