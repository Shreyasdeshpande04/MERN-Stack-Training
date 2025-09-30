import{Router}from "express"
const authrouter=Router()
import { getLogin,postLogin, getLogout,  getSignup, postSignup    } from "../Controller/authController.js"

authrouter.get("/login",getLogin)
authrouter.post('/login',postLogin)

authrouter.get("/signup", getSignup); 
authrouter.post("/signup", postSignup); 

authrouter.get("/logout", getLogout);

export const LoginRouter = authrouter;
