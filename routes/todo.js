import express from "express";

import { createTodo, getAllTodo } from "../controllers/todo.js";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodo)


export default router;