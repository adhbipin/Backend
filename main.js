import express from "express";
import { userRouter } from "./routes/user.route.js";
import "dotenv/config";
//hold express
const app = express();
const PORT = process.env.PORT;

//Some Important Middleware
// app.use()
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
{
  name: "pratik";
  age: "2";
}

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
