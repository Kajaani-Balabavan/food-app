import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://kajaani:${password}@${cluster}.lsp8o.mongodb.net/food-app?retryWrites=true&w=majority&appName=${cluster}`
    )
    .then(() => console.log("MongoDB connected"));
};
