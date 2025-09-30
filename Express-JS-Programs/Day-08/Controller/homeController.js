import { User } from "../Module/signup.js"
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
        res.redirect("/list")
    }
    catch(err){
        res.json({error:"internal server error"})
    }
}

export const getalluser=async(req,res)=>{
    try {
        const users= await User.find()
        res.render("table",{users})
    } catch (error) {
        res.json({error:"internal server error",details:error.message})
    }}
export const editController=async(req, res)=>{
    try {
        const user= await User.findById(req.params.id)
        res.render("edit", {user})
    } catch (error) {
        res.json({error:"internal server error during edit",details:error.message})
    }}
export const updateController=async(req, res)=>{
    try {
        const {name, email, password}=req.body
        const updateddata = await User.findByIdAndUpdate(req.params.id, {name, email, password}, {new:true})
        if(!updateddata) {
            return res.json({error: "something wrong when updating data"}) 
        }
        res.redirect("/list")
    } catch (error){
        res.send({error:"internal server error",details:error.message})
    }}
export const deleteController = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.redirect("/list");
    } catch (error) {
        res.status(500).json({ error: "Internal server error during deletion", details: error.message });
    }
};