"use strict";
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
exports.getAllConvert = exports.convertMoney = void 0;
const convertServer_1 = require("../API/convertServer");
const ConvertModel_1 = require("../models/ConvertModel");
//Creamos una instancia del servicio de conversión 
//se utilizan los parametros de la clase invocada
const convertServe = new convertServer_1.ConvertServe();
//controlador manejo solicitud de conversion  moneda
const convertMoney = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, amount, from, to } = req.query;
    //valicion de parametros ingresados correctos 
    if (!user_id || !amount || !from || !to) {
        return res.status(400).json({ error: 'Proporciona los parametros solicitados' });
    }
    try {
        //llamado del servicio para su respectiva conversion 
        const resultado = yield convertServe.convertBadge(to.toString(), from.toString(), Number(amount));
        //obtenemos el  resultado de la conversion
        yield ConvertModel_1.Convert.create({
            user_id: Number(user_id),
            from,
            to,
            amount,
            resultado
        });
        res.status(200).json({ result: user_id, to, from, amount, resultado });
    }
    catch (error) {
        //en caso de erroro generar mensaje con su respectivo error
        res.status(500).json({ error: error.message });
    }
});
exports.convertMoney = convertMoney;
const getAllConvert = (Req, Res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Req.query.user_id;
    try {
        const convertions = yield ConvertModel_1.Convert.findAll({
            where: { user_id: userId }
        });
        Res.status(200).json(convertions);
    }
    catch (error) {
        Res.status(500).json({ message: 'Error obtncion de conversiones' });
    }
});
exports.getAllConvert = getAllConvert;
