import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Follow Us On */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us On</h3>
          <div className="flex items-center space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-white hover:text-blue-500 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.pinterest.com" className="text-white hover:text-red-500 text-2xl">
              <FaPinterest />
            </a>
            <a href="https://www.youtube.com" className="text-white hover:text-red-600 text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/refund-policy" className="text-white hover:text-gray-400">Refund Policy</Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="text-white hover:text-gray-400">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="text-white hover:text-gray-400">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about-us" className="text-white hover:text-gray-400">About Us</Link>
            </li>
            <li>
              <Link to="/corporate-gifts" className="text-white hover:text-gray-400">Corporate/Bulk Gifts</Link>
            </li>
            <li>
              <Link to="/blogs" className="text-white hover:text-gray-400">Blogs</Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-white hover:text-gray-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Address */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            123 E-Commerce Street, Suite 100,<br /> New York, NY 10001
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Email: info@ecommerce.com<br />
            Phone: (123) 456-7890
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} E-Commerce, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
