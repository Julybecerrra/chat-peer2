
import { Request, Response } from "express";
import { ConvertServe } from "../API/convertServer";

//Creamos una instancia del servicio de conversión 
//se utilizan los parametros de la clase invocada
const convertServe = new ConvertServe();


//controlador manejo solicitud de conversion  moneda
export const convertMoney = async(req: Request, res: Response) => {
  const { amount, from, to } = req.query;


//valicion de parametros ingresados correctos 
if (!amount || !from || !to) {
  return res.status(400).json({ error: 'Proporciona los parametros solicitados'})
}
try {
  //llamado del servicio para su respectiva conversion 
  const result = await convertServe.convertBadge(to.toString(), from.toString(), Number(amount));
  //obtenemos el  resultado de la conversion
  res.status(200).json({ to, from, amount, result})
} catch (error) {
  //en caso de erroro generar mensaje con su respectivo error
  res.status(500).json({ error: (error as Error).message})
}
}