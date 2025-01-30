import { User } from "../models/user.js";
import bcrypt from "bcrypt";
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
      return res
        .status(403)
        .json({ success: false, message: "This email id is already registered" });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password,10);

    await User.create({ fullName, email, password: hashedPassword });
    return res.status(201).json({ success: true, message: "User Registered" }); 
  } catch (error) {}
};
