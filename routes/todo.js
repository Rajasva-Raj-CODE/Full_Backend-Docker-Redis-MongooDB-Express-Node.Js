import express from "express";

import { createTodo, getAllTodo, updateTodo, deleteTodo } from "../controllers/todo.js";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodo)
router.route("/:todoId").put(updateTodo).delete(deleteTodo)


export default router;