import {Sequelize} from 'sequelize-typescript'
import dotenv from 'dotenv'
import { User } from '../models/userModel';
import { Convert } from '../models/ConvertModel';

dotenv.config();
const db = process.env.DB_NAME || 'convert_db'
const username =process.env.DB_USER || 'root'
const password = process.env.DB_PASSWORD || ''

console.log(db)
export const sequelize = new Sequelize(db, username, password, {
  dialect: 'mysql',
  host: 'localhost',
  models: [User,Convert],
});

//sequelize.authenticate()