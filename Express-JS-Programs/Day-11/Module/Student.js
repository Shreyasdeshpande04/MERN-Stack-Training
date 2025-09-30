import mongoose, { Schema } from "mongoose";

const signupSchema= new Schema({

  
  name: { type: String },
  email: { type: String },
  password: { type: String },
  domain: { type: String },
  degree: { type: String },
  image:{type:String}
})

export const User= mongoose.model("userregs",signupSchema)