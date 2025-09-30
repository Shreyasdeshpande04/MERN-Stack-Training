import express from "express"
import path from "path"
import { LoginRouter } from "./Router/Login.Router.js"
const app = express()
const port = 3000
 app.use(express.urlencoded())
 app.use(LoginRouter)
const filepath = path.join(import.meta.dirname, "public",)
app.use(express.static(filepath))
app.use("/",(req,res)=>{
res.send(`<h1>404 PAGE NOT FOUND </h1><p><a href="index.html">Click here to go to  the login Page</p>`)
})
app.listen(port,()=>{
    console.log(`running on port number ${port}`)
})