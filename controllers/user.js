import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }
    // finding user ki with this email id se register toh ni
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "This email id is already registered",
      });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ fullName, email, password: hashedPassword });
    return res.status(201).json({ success: true, message: "User Registered" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email id or password" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email id or password" });
    }
    
    const token = await jwt.sign({userID:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});

    return res
      .status(200)
      .json({ success: true, message: `Welcome ${user.fullName}` });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
