import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import wallpaper from "../assets/bg-wallpaper.jpg";
import wallpaper2 from "../assets/bg-wallpaper2.jpg";
import logo from "../assets/check.gif";
import add from "../assets/add.gif";
import Navbar from "./Navbar";
import axios from "axios";
import { useToast } from "../hooks/use-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const addTodoHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/todo/",
        { title, description },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        alert("Todo added successfully", res.data.message);
      }
    } catch (error) {
        alert("Error adding todo", error.res.data.message);
      
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-center p-6"
        style={{
          backgroundImage: `url(${wallpaper2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-blue-100 shadow-lg rounded-2xl p-6 mt-8 w-full max-w-lg backdrop-blur-md bg-opacity-10 ">
          <div className="flex justify-self-center gap-2 ">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Add Your Todo
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add a new todo..."
              className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <Button
              onClick={addTodoHandler}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-gray-700 text-white px-6 py-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out transform  hover:scale-90 "
            >
              <span>Add Todo</span>
              <img src={add} alt="Add icon" className="w-7 h-7 rounded-full" />
            </Button>
          </div>

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your todo here..."
            className="w-full mt-4 p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
