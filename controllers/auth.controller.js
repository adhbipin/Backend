import { Auth } from "../model/auth.schema.js";

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
        const createUser = await Auth.create({
          name,
          email,
          password,
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
  login: () => {},
};
