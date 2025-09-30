import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { name: "John Doe", email: "john@example.com", role: "admin", createdAt: new Date() },
  { name: "Jane Smith", email: "jane@example.com", role: "user", createdAt: new Date() }
];

app.get("/api/getAll", (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
