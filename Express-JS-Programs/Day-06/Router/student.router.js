import {Router} from "express";
const router=Router()
router.get("/report",(req,res)=>{
const Student=[{
    name:"Shreyas",
    age:"21",
    college:"AGPIT",
    cgpa:"7.17"
},
{
    name:"Amit",
    age:"22",
    college:"AGPIT",
    cgpa:"7.10"
},
{
    name:"Rohan",
    age:"22",
    college:"AGPIT",
    cgpa:"7.30"
}

]
res.render("report",{Student})
})
router.get("/About",(req,res)=>{
    res.render("about") 
})
router.get("/Gallery",(req,res)=>{
    res.render("gallery") 
})
router.get("/report",(req,res)=>{
    res.render("report") 
})
export const StudentRouter=router