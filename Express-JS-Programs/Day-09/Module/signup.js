import mongoose, { Schema } from "mongoose";

const signupSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  degree: { type: String, required: true },
  domain: { type: String, required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  packagee: { type: Number, required: true },
});

export const User =mongoose.model("userReg", signupSchema)