import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import img from "../assets/loginImg.png";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/login.gif";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
        toast.success("Login successfully", res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Error logging in", error.res.data.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="w-full md:w-1/4 flex justify-center items-center">
        <img
          src={img}
          alt="Login Icon"
          className="h-60 md:w-72 md:h-80 object-cover rounded-l-full shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 h-60 md:h-80 max-w-md bg-white p-8 rounded-r-full shadow-2xl flex flex-col items-center">
        <img
          src={img2}
          alt="Login"
          className="w-20 h-20 object-contain rounded-full"
        />

        <input
          value={user.email}
          onChange={chnageHandler}
          type="text"
          name="email"
          placeholder="Email"
          className="md:w-64  max-w-sm p-3 mb-4 border rounded-full border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 focus:scale-105"
        />

        <input
          value={user.password}
          onChange={chnageHandler}
          type="password"
          name="password"
          placeholder="Password"
          className="md:w-64  max-w-sm p-3 mb-4 border rounded-full border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform duration-200 focus:scale-105"
        />

        <button
          onClick={loginHandler}
          className="md:w-64  max-w-sm p-3 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
