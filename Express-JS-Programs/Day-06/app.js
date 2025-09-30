import express from "express"
import ejs from "express"
import { StudentRouter } from "./Router/student.router.js"
const app=express()
const port=3000
app.use(StudentRouter)
app.set("view engine","ejs")
//app.set("views",'./abc')

app.listen(port,()=>{
    console.log(`running on port  Number ${port}`)
})