import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/database.js";
import userRoutes from "./routes/user.js";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

connectDB();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//http://localhost:8000/api/v1/user/
app.use("/api/v1/user",userRoutes);









const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})