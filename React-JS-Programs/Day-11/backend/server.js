import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import userRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

// Root route to avoid 404 when visiting http://localhost:5000/
app.get("/", (req, res) => {
  res.send("API is running");
});

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://deshpandeshreyas434:lMw5xlMuQCbxKIZW@cluster0.w4l2zll.mongodb.net/Driver?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error(err));

// Use user routes
app.use("/api/users", userRoutes);

// Create HTTP server and socket.io
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);
});

app.set("io", io);

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
