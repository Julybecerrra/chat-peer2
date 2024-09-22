"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerconvert_1 = require("../controllers/controllerconvert");
const controllerUser_1 = require("../controllers/controllerUser");
const router = express_1.default.Router();
router.get('/convertserve', controllerconvert_1.convertMoney);
//router.get('/convertserve',convertMoney);
router.get('/converts', controllerconvert_1.getAllConvert); //http://localhost:3000/convert/converts?user_id=4
router.post('/register', controllerUser_1.createUser);
router.post('/login', controllerUser_1.loginUser);
//http://localhost:3000/convert/login?password_user=securepassword&email=johndov@example.com
router.post('/userId', controllerUser_1.getUserId);
//http://localhost:3000/convert/userId?userId=2
exports.default = router;
