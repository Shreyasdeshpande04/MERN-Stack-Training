import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import userRoutes from "./routes/users.js";
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/Driver")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
app.use("/api/users", userRoutes);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",  // allow all origins for testing
    methods: ["GET", "POST"]
  }
});
io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);
});
app.set("io", io);
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));