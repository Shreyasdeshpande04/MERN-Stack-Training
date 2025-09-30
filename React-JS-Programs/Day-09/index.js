import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/user.router.js"; // 👈 adjust path if router is not inside /routes

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to my Express + MongoDB server 🚀");
});

// ✅ Register user routes
app.use("/api/users", userRouter);

const Server = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    process.exit(1);
  }
};

Server();
