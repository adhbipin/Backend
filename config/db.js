import mongoose from "mongoose";
const dburl = process.env.MONGODB_URI;
export const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("Db connected Successfully.");
  } catch (error) {
    console.log("DB connection error;", error);
  }
};
