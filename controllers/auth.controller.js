import { Auth } from "../model/auth.schema.js";
import bcrypt from "bcrypt";
export const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const checkUser = await Auth.findOne({ email });
      if (checkUser) {
        res.status(400).json({
          message: "User already registered",
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await Auth.create({
          name,
          email,
          password: hashedPassword,
        });

        res.status(201).json({
          message: "User registered sucessfully",
          data: createUser,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INternall Server Error",
        error: error,
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      const checkPassword = await bcrypt.compare(
        password,
        existingUser.password,
      );
      if (checkPassword) {
        res.status(200).json({
          message: "user lodded In",
        });
      } else {
        res.status(400).json({
          message: "Wrong Password",
        });
      }
    } else {
      res.status(400).json({
        message: "User not found",
      });
    }
  },
};
