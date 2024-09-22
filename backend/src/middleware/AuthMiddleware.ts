import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
//import dotenv from 'dotenv'
//dotenv.config()


const secretKey = 'token'

export const tokenMiddleware = (Res: Response, Req: Request, next: NextFunction) => {

  const token = Req.headers['authorization']?.split('')[1];

  if (!token) {
    return Res.status(401).json({ message: 'No se proporciono token'})
  }

  //verifiar token
  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return Res.status(401).json({ message: 'Token Invalido'})
    }
    (Req as any).userId= (decoded as any).userId;
    next();
  } )

}