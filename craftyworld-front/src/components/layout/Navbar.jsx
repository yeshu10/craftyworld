import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSignOutAlt, FaBoxOpen } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg">E-Commerce</Link>
        <div className="flex space-x-4 items-center">
          {/* Home link */}
          <Link to="/home" className="text-white flex items-center space-x-1">
            <FaBoxOpen />
            <span>Home</span>
          </Link>
          {/* Wishlist link */}
          <Link to="/wishlist" className="text-white flex items-center space-x-1">
            <FaHeart />
            <span>Wishlist</span>
          </Link>
          {/* Orders link */}
          <Link to="/orders" className="text-white flex items-center space-x-1">
            <FaBoxOpen />
            <span>Orders</span>
          </Link>
          {/* Cart link */}
          <Link to="/cart" className="text-white flex items-center space-x-1">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
          {/* Login link */}
          <Link to="/login" className="text-white flex items-center space-x-1">
            <FaSignOutAlt />
            <span>Login</span>
          </Link>
          {/* Signup link */}
          <Link to="/signup" className="text-white">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
