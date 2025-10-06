import mongoose from "mongoose";
import {ENV} from "./env.js";

const connectDB = async () => {
    console.log("Connecting to MongoDB...");
  try {
   const conn =  await mongoose.connect(ENV.MONGO_URI );
    console.log("MongoDB connected" , conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
