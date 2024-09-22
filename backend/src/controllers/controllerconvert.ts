
import { Request, Response } from "express";
import { ConvertServe } from "../API/convertServer";
import { Convert } from "../models/ConvertModel";
import { getUserId } from "./controllerUser";
import { User } from "../models/userModel";

//Creamos una instancia del servicio de conversión 
//se utilizan los parametros de la clase invocada
const convertServe = new ConvertServe();


//controlador manejo solicitud de conversion  moneda
export const convertMoney = async(req: Request, res: Response) => {
  const { user_id, amount, from, to } = req.query;

//valicion de parametros ingresados correctos 
if (!user_id || !amount || !from || !to) {
  return res.status(400).json({ error: 'Proporciona los parametros solicitados'})
}
try {
  //llamado del servicio para su respectiva conversion 
  const resultado = await convertServe.convertBadge(to.toString(), from.toString(), Number(amount));
  
  //obtenemos el  resultado de la conversion
  await Convert.create({
    user_id: Number(user_id),
    from,
    to,
    amount,
    resultado
    
  })
  res.status(200).json({ result: user_id, to, from, amount, resultado})
} catch (error) {
  //en caso de erroro generar mensaje con su respectivo error
  res.status(500).json({ error: (error as Error).message})
}
}


export const getAllConvert = async(Req: Request, Res: Response) => {
const userId =Req.query.user_id;

  try {
   
    const convertions = await Convert.findAll({
      where: {user_id: userId}
    })
    Res.status(200).json(convertions)
  } catch (error) {
    Res.status(500).json({ message: 'Error obtncion de conversiones'})
  }
}