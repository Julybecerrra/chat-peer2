import { Request, Response } from "express";
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"

import { User } from "../models/userModel";

 export const createUser = async (Req: Request, res: Response) => {
  try {
    const {username,password_user,email} = Req.query;

    const userExist =  await User.findOne({
      where: {email}
    })
    if (userExist) {
      return res.status(400).send('Email is already associatedwith an account');
    }
    const userNameExist  = await User.findOne({
     where: {username}
    })
    if(userNameExist){
      return res.status(400).send('Username is used')
    }
    await User.create({
      username, 
      password_user: await bcrypt.hash(password_user as string, 15),
      email,  
    });
    res.status(200).json({ message: 'Usuario registrado correctamente'})
  } catch (error) {
    res.status(500).json({ error: (error as Error).message})
  }
}
export const getUserId = async(Req: Request, res: Response) => {
  const userId = Req.params.userId || Req.query.userId;
   // Verificar que userId no sea undefined o de un tipo no válido
   if (typeof userId !== 'string' && typeof userId !== 'number') {
    return res.status(400).json({ error: 'ID de usuario no válido.' });
  }

  if (!userId) {
    return res.status(401).json({error: 'Id user requerido'})
  }

  const usuario = await User.findByPk(userId)

  if (usuario) {
    return res.json({ id: usuario.id, username: usuario.username, email: usuario.email})
  }else{
    return res.status(404).json({ error: "No se encontro usuario"})
  }
}

export const loginUser = async (Req: Request, res: Response) => {
  try {
    const {password_user, email} = Req.query;

    const user = await User.findOne({
      where: { email }
    });
    if (!user) {
      return res.status(401).json({error: 'Usuario no enecontrdao'})
    }
    const passwordMatch = await bcrypt.compare(password_user as string, user.password_user)
    if (!passwordMatch) {
      return res.status(401).json({error: 'Contraseña incorrecta'})
    }
    const token = jwt.sign({ UserId: user.id}, 'token',{expiresIn: '1h'})
    res.status(200).json({ token})
  } catch (error) {
    res.status(500).json({ error: (error as Error).message})
  }
}
//controlador manejo solicitud de conversion  moneda