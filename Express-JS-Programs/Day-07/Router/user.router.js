import { Router } from "express";
import {homeController, signupController, signupuserController} from "../controller/homeController.js"; 

const router= Router()
router.get("/", homeController)
router.get("/signup", signupController)
router.post("/signupUser", signupuserController)

export const userRouter=router