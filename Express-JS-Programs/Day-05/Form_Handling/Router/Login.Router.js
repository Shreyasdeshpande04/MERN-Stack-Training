import { Router } from "express";
const router = Router()

router.post("/login",(req,res)=>{
    console.log(req.body)          
    // const data = req.body     
    // res.send(data)
})

export const LoginRouter= router