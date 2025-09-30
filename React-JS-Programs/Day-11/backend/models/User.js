import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  age: Number
});

export default mongoose.model("User", userSchema);
