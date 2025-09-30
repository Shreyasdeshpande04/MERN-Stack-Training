import express from "express"
const app=express()
import mongoose from "mongoose"
import {userRouter} from "./router/user.router.js"
const port=3000
app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(userRouter)
try{
    mongoose.connect("mongodb://localhost:27017/mvc")
}
catch(error){
    console.log(error)
    process.exit()
}

app.listen(port,()=>{
    console.log(`running on port  Number ${port}`)
})