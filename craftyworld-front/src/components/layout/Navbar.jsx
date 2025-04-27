import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg">E-Commerce</Link>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/signup" className="text-white">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
