import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  comment: { type: String, required: true },
});

export const Contact = mongoose.model("Contact", contactSchema);
