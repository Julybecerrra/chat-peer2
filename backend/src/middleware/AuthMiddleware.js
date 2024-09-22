"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//import dotenv from 'dotenv'
//dotenv.config()
const secretKey = 'token';
const tokenMiddleware = (Res, Req, next) => {
    var _a;
    const token = (_a = Req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split('')[1];
    if (!token) {
        return Res.status(401).json({ message: 'No se proporciono token' });
    }
    //verifiar token
    jsonwebtoken_1.default.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return Res.status(401).json({ message: 'Token Invalido' });
        }
        Req.userId = decoded.userId;
        next();
    });
};
exports.tokenMiddleware = tokenMiddleware;
