import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const todo = new Todo({ title, description });
    await todo.save();
    return res.status(201).json({ success: true, message: "Todo Created..." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({ success: true, todos: todos.length === 0 ? [] : todos });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
