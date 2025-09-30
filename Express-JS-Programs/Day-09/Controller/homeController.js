import { User } from "../Module/signup.js";
import { Contact } from "../Module/contact.js";
export const homeController = async (req, res) => {
  try {
    const users = await User.find();
    res.render("homepage", { users });
  } catch (error) {
    res.json({ error: "Internal server error", details: error.message });}};
export const getEditForm = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("signup", { user }); 
  } catch (err) {
  res.json({ error: "Internal Server Error", details: err.message });  }};
export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, degree, domain, company, role, packagee } = req.body;
    await User.findByIdAndUpdate(id, {name,email, degree,domain,company,role,packagee,});
    res.redirect("/list"); 
  } catch (err) {
  res.json({ error: "Internal Server Error", details: err.message }); }};
export const contactController = async (req, res) => {
  try {
    const { name, email, mobile, comment } = req.body;
    const newContact = new Contact({ name, email, mobile, comment });
    await newContact.save();
    res.render("contact"); 
  } catch (err) {
    res.json({ error: "Internal Server Error", details: err.message });}};
export const signupController=(req,res)=>{
    res.render("signup")}
export const serviceController = (req, res) => {
    res.render("services");};
export const signupuserController = async (req, res) => {
  try {
    const { name, email, degree, domain, company, role, packagee } = req.body;
    const newUser = new User({ name, email, degree, domain, company, role, packagee });
    await newUser.save();
    res.redirect("/list");
  } catch (err) {
    res.json({ error: "internal server error", details: err.message }); }};
export const getalluser=async(req,res)=>{
    try {
        const users= await User.find()
        res.render("table",{users})
    } catch (error) {
        res.json({error:"internal server error",details:error.message}) }}
export const editController=async(req, res)=>{
    try {
        const user= await User.findById(req.params.id)
        res.render("edit", {user})
    } catch (error) {
   res.json({error:"internal server error during edit",details:error.message})}}
export const updateController=async(req, res)=>{
    try {
        const {name, email, password}=req.body
        const updateddata = await User.findByIdAndUpdate(req.params.id, {name, email, password}, {new:true})
        if(!updateddata) {
            return   res.json({ error: "Internal Server Error", details: err.message });}
        res.redirect("/list")
    } catch (error){
        res.send({error:"internal server error",details:error.message})}}
export const deleteController = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.redirect("/list");
    } catch (error) {
    res.json({ error: "Internal Server Error", details: err.message });}};
export const contactPageController = (req, res) => {
    res.render("contact");};