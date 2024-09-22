import express from "express";
import { convertMoney, getAllConvert } from "../controllers/controllerconvert";
import { createUser, getUserId, loginUser } from "../controllers/controllerUser";

const router = express.Router();

router.get('/convertserve',convertMoney);
//router.get('/convertserve',convertMoney);

router.get('/converts',getAllConvert) //http://localhost:3000/convert/converts?user_id=4
router.post('/register', createUser);
router.post('/login', loginUser); 
//http://localhost:3000/convert/login?password_user=securepassword&email=johndov@example.com
router.post('/userId',getUserId); 
//http://localhost:3000/convert/userId?userId=2



export default router   