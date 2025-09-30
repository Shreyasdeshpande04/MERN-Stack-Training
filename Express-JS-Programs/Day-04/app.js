import express from "express";
import { userRouter } from "./user_router.js";
const app=express()
const port=3000
app.use(userRouter) 

app.get("/product",(req,res)=>{
    console.log(req.query); 
    res.send(`your search history is ${req.query.search}`)
    
})

app.listen(port,()=>{
    console.log(`server listning on ${port}`);
    
})