import { User } from "../Module/Student.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads"); // ✅ Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // ✅ This is filename, not folder
  }
});

export const upload=multer({storage});

export const getAddstudent = (req, res) => {
    res.render('AddStudent', { isLoggedIn: req.isLoggedIn });
};

export const postaddStudent = async (req, res) => {
    try {
        const { name, email, password, degree, domain } = req.body;
        const image=req.file?req.file.filename:null
        const newuser = new User({ name, email, password, degree, domain,image });
        await newuser.save();
        res.redirect("/");
    } catch (error) {
        res.json({ error: "Internal server error", details: error.message });
    }
};

export const GetallUser = async (req, res) => {
    try {
        const users = await User.find();
        res.render("UserTable", { users, isLoggedIn: req.isLoggedIn });
    } catch (error) {
        res.json({ error: "Internal server error", details: error.message });
    }
};

export const getUpdateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render("EditUser", { user, isLoggedIn: req.isLoggedIn });
    } catch (error) {
        res.json({ error: "Internal server error", details: error.message });
    }
};

export const postUpdateUser = async (req, res) => {
    try {
        const { name, email, password, degree, domain } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, password, degree, domain },
            { new: true }
        );
        if (!updatedUser) {
            return res.json({ error: "Error while updating user" });
        }
        res.redirect("/list");
    } catch (error) {
        res.json({ error: "Internal server error", details: error.message });
    }
};

export const postdeletUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect("/list");
    } catch (error) {
        res.json({ error: "Internal server error", details: error.message });
    }
};
