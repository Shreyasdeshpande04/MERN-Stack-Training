import express from "express"
import mongoose from "mongoose"
import {userRouter} from "./Router/user.router.js" 

const port=3000
const app=express()

app.use(express.urlencoded({ extended: true })) 
app.use(express.json()); 
app.use(userRouter)
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost:27017/mvc")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1); 
    });
app.listen(port,()=>{
    console.log(`Server running on port Number ${port}`)
})