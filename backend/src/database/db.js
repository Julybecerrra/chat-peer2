"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const userModel_1 = require("../models/userModel");
const ConvertModel_1 = require("../models/ConvertModel");
dotenv_1.default.config();
const db = process.env.DB_NAME || 'convert_db';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';
console.log(db);
exports.sequelize = new sequelize_typescript_1.Sequelize(db, username, password, {
    dialect: 'mysql',
    host: 'localhost',
    models: [userModel_1.User, ConvertModel_1.Convert],
});
//sequelize.authenticate()
