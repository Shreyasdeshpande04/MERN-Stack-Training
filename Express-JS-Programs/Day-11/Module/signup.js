
import mongoose, { Schema } from "mongoose";

const signupSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, 
});

export const Signup = mongoose.model("signup", signupSchema); 
