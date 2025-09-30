import { Router } from "express";
const router=Router()
import { getAddstudent,upload,GetallUser,postaddStudent ,getUpdateUser,postUpdateUser,postdeletUser,} from "../Controller/studentController.js";

router.get ("/addStudent",getAddstudent)
router.post("/addStudent",upload.single("image"),postaddStudent)
router.post("/addStudent",postaddStudent)
router.get("/list",GetallUser)
router.get("/edit/:id",getUpdateUser)
router.post("/update/:id",postUpdateUser)
router.post("/delete/:id",postdeletUser)


export  const StudentRouter=router