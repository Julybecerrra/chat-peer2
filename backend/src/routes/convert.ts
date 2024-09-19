import express from "express";
import { convertMoney } from "../controllers/controllerconvert";

const router = express.Router();

router.get('/convertserve',convertMoney);

export default router   