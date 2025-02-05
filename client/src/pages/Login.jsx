import React, { useState } from "react";
import { Button } from "../components/ui/button";
import axios from "axios";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {toast} = useToast();

  const chnageHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
      alert("Login successfully", res.data.message);
      }
    } catch (error) {
        alert("Error logging in", error.res.data.message);
    }
  };
  return (
    <motion.div
    className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg w-80"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
      <motion.input
        value={user.email}
        onChange={chnageHandler}
        type="text"
        name="email"
        placeholder="Email"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        whileFocus={{ scale: 1.05 }}
      />
      <motion.input
        value={user.password}
        onChange={chnageHandler}
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        whileFocus={{ scale: 1.05 }}
      />
      <motion.button
        onClick={loginHandler}
        className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-transform duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Login
      </motion.button>
    </motion.div>
  </motion.div>
  );
};

export default Login;
