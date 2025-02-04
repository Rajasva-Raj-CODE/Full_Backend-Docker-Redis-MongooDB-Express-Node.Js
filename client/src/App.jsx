import React, { useState } from "react";
import "./App.css";
import Navbar from "@/pages/Navbar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import logo from "./assets/check.gif";
import add from "./assets/add.gif";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoHandler = async () => {
    console.log(title, description);
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 w-full max-w-lg">
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
            <Button onClick={addTodoHandler} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out transform  hover:scale-90 ">
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
}

export default App;
