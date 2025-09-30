import { Router } from "express";
import {homeController, signupController,deleteController, signupuserController, editController,getalluser,updateController} from "../Controller/homeController.js";

const router= Router()
router.get("/", homeController)
router.get("/signup", signupController)
router.post("/signupUser", signupuserController)
router.get("/list", getalluser)
router.get("/edit/:id", editController)
router.post("/update/:id", updateController) 
router.post("/delete/:id", deleteController)

export const userRouter=router