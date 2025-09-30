import { User } from "../Module/Student.js";
import { Contact } from "../Module/Contact.js"; 
export const homecontrolle = async (req, res) => {
  try {
    const users = await User.find(); 
    res.render("HomePage", { users, isLoggedIn: req.isLoggedIn }); 
  } catch (error) {
  res.json({ error: "Internal server error", details: error.message });
  }};
export const contactPageController = (req, res) => {
  res.render("contact", { isLoggedIn: req.isLoggedIn });};
export const contactController = async (req, res) => {
  try {
    const { name, email, mobile, comment } = req.body;
    const newContact = new Contact({ name, email, mobile, comment });
    await newContact.save(); 
    res.render("contact", { isLoggedIn: req.isLoggedIn });
  } catch (err) {
    res.json({ error: "Internal Server Error", details: err.message });
  }};
