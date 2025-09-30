import { Signup } from "../Module/Signup.js";

export const getLogin = (req, res) => {
  res.render("login", { isLoggedIn: false });
};
export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email });

    if (!user || user.password !== password) {
      return res.send("Invalid user details");
    }

    req.session.isLoggedIn = true;
    res.redirect("/list");
  } catch (error) {
    res.json({ error: "Internal Server Error", details: error.message });
  }
};

export const getLogout = (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect("/");
};

export const getSignup = (req, res) => {
  res.render("signup", { isLoggedIn: false });
};

export const postSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await Signup.findOne({ email });
    if (existing) return res.send("User already exists");

    const newUser = new Signup({ name, email, password });
    await newUser.save();

    req.session.isLoggedIn = true;
    res.redirect("/login");
  } catch (error) {
    res.json({ error: "Internal Server Error", details: error.message });
  }
};
