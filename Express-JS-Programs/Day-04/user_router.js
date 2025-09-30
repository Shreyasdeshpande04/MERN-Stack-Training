import { Router } from "express";
const router = Router()

router.get("/user",(req,res)=>{
    res.send(`we are creating this project using routers`)

})
router.get("/alluser",(req,res)=>{
    res.send(`<h1>welcomes to all User</h1>`)
})
router.get("/Admin",(req,res)=>{
    res.send(`<h1>Welcome to Admin Page</h1>`)

})

export const userRouter=router
