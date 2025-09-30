import { Router } from "express";
import { createUser, getAllUser,getOne,updateuser,deleteUser} from "../controller/userController.js"; 
const router=Router()
router.post('/create', createUser)
router.get('/getAll',getAllUser)
router.get('/getone/:id',getOne)
router.put('/update/:id', updateuser)
 router.delete('/delete/:id', deleteUser)
export default router;
