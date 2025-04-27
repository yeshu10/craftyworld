import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/features/authSlice";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Button from "../components/common/Button"; // assuming you have your own Button component

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    await dispatch(signup(userData));
    navigate("/login");
  };

  const handleGoogleSignup = () => {
    window.open(`${import.meta.env.VITE_SERVER_URL}/auth/google`, "_self");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      {/* Background with single color */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-2xl">
        {/* Left Side */}
        <div className="flex flex-col items-center text-center text-red-400 mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg mb-6">Join us and explore new possibilities.</p>
          <div className="flex space-x-6 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-pink-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-pink-400 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-pink-400 transition" />
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2">
          <div className=" bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-red-200 mb-6">Create an Account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-transparent text-white placeholder-white placeholder-opacity-70"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-transparent text-white placeholder-white placeholder-opacity-70"
                required
              />
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Sign Up
              </Button>
            </form>

            <div className="my-6 flex items-center">
              <hr className="flex-grow border-white border-opacity-30" />
              <span className="px-4 text-white">OR</span>
              <hr className="flex-grow border-white border-opacity-30" />
            </div>

            <Button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Sign Up with Google
            </Button>

            <p className="mt-6 text-center text-white">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-pink-400 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
