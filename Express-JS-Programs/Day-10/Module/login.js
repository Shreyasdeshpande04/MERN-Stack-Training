import mongoose, { Schema } from "mongoose";
const loginSchema= new Schema({

name: { type: String, required:true},
email: {type: String, required:true},
password: { type: String, required:true}
})

export const User =mongoose.model("login", loginSchema)