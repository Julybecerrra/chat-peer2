"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.getUserId = exports.createUser = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const userModel_1 = require("../models/userModel");
const createUser = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password_user, email } = Req.query;
        const userExist = yield userModel_1.User.findOne({
            where: { email }
        });
        if (userExist) {
            return res.status(400).send('Email is already associatedwith an account');
        }
        const userNameExist = yield userModel_1.User.findOne({
            where: { username }
        });
        if (userNameExist) {
            return res.status(400).send('Username is used');
        }
        yield userModel_1.User.create({
            username,
            password_user: yield bcrypt.hash(password_user, 15),
            email,
        });
        res.status(200).json({ message: 'Usuario registrado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createUser = createUser;
const getUserId = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Req.params.userId || Req.query.userId;
    // Verificar que userId no sea undefined o de un tipo no válido
    if (typeof userId !== 'string' && typeof userId !== 'number') {
        return res.status(400).json({ error: 'ID de usuario no válido.' });
    }
    if (!userId) {
        return res.status(401).json({ error: 'Id user requerido' });
    }
    const usuario = yield userModel_1.User.findByPk(userId);
    if (usuario) {
        return res.json({ id: usuario.id, username: usuario.username, email: usuario.email });
    }
    else {
        return res.status(404).json({ error: "No se encontro usuario" });
    }
});
exports.getUserId = getUserId;
const loginUser = (Req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password_user, email } = Req.query;
        const user = yield userModel_1.User.findOne({
            where: { email }
        });
        if (!user) {
            return res.status(401).json({ error: 'Usuario no enecontrdao' });
        }
        const passwordMatch = yield bcrypt.compare(password_user, user.password_user);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }
        const token = jwt.sign({ UserId: user.id }, 'token', { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.loginUser = loginUser;
//controlador manejo solicitud de conversion  moneda
