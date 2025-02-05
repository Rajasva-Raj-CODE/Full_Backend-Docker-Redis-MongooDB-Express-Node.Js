import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./DB/database.js";
import userRoutes from "./routes/user.js";
import todoRoutes from "./routes/todo.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

connectDB();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

//http://localhost:8000/api/v1/user/
//http://localhost:8000/api/v1/todo/
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/todo",todoRoutes);









const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})