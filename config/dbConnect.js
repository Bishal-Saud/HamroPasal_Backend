import mongoose from "mongoose";
import { config } from "dotenv";
config();
mongoose.set("strictQuery", false);
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};
export default dbConnect;
