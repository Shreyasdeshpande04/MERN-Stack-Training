import { Router } from "express";
import {homeController, signupController,updateUserController,getEditForm,  contactPageController,contactController,deleteController,serviceController, signupuserController, editController,getalluser,updateController} from "../controller/homeController.js";
const router= Router()
router.get("/homepage", homeController)
router.get("/signup", signupController)
router.get("/contact", contactPageController);  
router.post("/contact", contactController);    
router.post("/signupUser", signupuserController)
router.get("/list", getalluser)
router.get("/services", serviceController)
router.get("/edit/:id", editController)
router.post("/update/:id", updateController) 
router.post("/delete/:id", deleteController)
router.post("/edit/:id", updateUserController)
router.get("/edit/:id", getEditForm);   
export const userRouter=router