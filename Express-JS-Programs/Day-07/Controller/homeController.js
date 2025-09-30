import { User } from "../module/signup.js"
export const homeController=(req,res)=>{
    res.render("homepage")
}
export const signupController=(req,res)=>{
    res.render("signup")
}
export const signupuserController=async(req,res)=>{
    try{
   const {name, email, password}=req.body
    const newUser= new User({name, email, password})
    await newUser.save()
    res.render("homepage")
    }
    catch(err){
        res.json({error:"internal server error"})
}
}