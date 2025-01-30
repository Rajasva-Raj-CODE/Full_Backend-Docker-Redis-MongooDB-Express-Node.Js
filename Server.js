import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/database.js";
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();

connectDB();

app.use("/api/v1/user",userRoutes);









const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})