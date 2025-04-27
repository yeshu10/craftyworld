import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/layout/Navbar";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user); // Get user from Redux store

  return (
    <div>
  
      <div className="p-4">
        <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
        <p>Your account is successfully set up.</p>
        {/* You can add order tracking, product management, etc., here */}
      </div>
    </div>
  );
};

export default Dashboard;
