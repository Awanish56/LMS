import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // if you're using React Router

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">LMS Platform</h2>
          <p className="text-gray-400">
            Empowering learners with intuitive access to courses and learning tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-500">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: support@lms.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>

          <div className="flex mt-4 gap-4 text-2xl">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
              <BsFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
              <BsInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
              <BsLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © {year} LMS Platform. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
