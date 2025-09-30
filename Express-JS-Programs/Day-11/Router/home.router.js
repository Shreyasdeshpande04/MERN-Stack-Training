import { Router } from "express";
import { homecontrolle, contactPageController,contactController } 
from "../Controller/homecontroller.js";

const router=Router()
router.get ("/",homecontrolle)
router.get("/contact", contactPageController) 
router.post("/contact", contactController)
export const homerouter=router