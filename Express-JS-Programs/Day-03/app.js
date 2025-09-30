import express from "express"
import path  from "path" 
const app=express()
const port=3000

const staticfile=path.join(import.meta.dirname,"TEST","expense")
app.use(express.static(staticfile))

// app.get("/profile/:username",(req,res)=>{
//     const username=(req.params.username)
//     res.send(`<h1> welcome to our website ${username}</h1>`)
// })

// app.get("data/:id",(req,res)=>{
//     const data=(req.params.id)
//     res.send(`<h1> thi sis your data</h1>`)
// })

// app.get("/data",(req,res)=>{
//     res.send(`<h1> i am from admin side</h1>`)
// }
// )

app.listen(port,()=>{
    console.log(`running on port ${port}`);
})