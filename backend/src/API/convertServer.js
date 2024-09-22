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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertServe = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
//se realiza llamo dpara que lea las variables de entorno
dotenv_1.default.config();
//clase dedicada para las coversiones a traves de la API
class ConvertServe {
    //asignamos las variables que contendra las Varibles .env y usamos el operador ?? para manejar el undefined
    constructor() {
        var _a, _b;
        this.apiKey = (_a = process.env.API_ACCESS_KEY) !== null && _a !== void 0 ? _a : ' ';
        this.apiUrl = (_b = process.env.API_ACCESS_URL) !== null && _b !== void 0 ? _b : '';
    }
    /*
      const [count, setCount] = useState(0)
    
    & currencies = EUR,GBP,CAD,PLN
    & source = USD
    & format = 1
    return
    */
    //como es un array de divisas se utiliza corchetes
    // se convierte cada divisa o moneda en una cadena separada por comas 
    getConvert(currencies, source) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(this.apiUrl, {
                    params: {
                        access_key: this.apiKey,
                        currencies: currencies.join(','),
                        source: source.join(','),
                        format: 1
                    }
                });
                if (res.data.success) {
                    //quotes objecto que contiene las tasa de conversion en la API
                    return res.data.quotes;
                }
                else {
                    throw new Error(`Error en lasolicitud`);
                }
            }
            catch (error) {
                throw new Error(`Error en la solicitud a la API: ${error.message}`);
            }
        });
    }
    /*
    & currencies = EUR,GBP,CAD,PLN to
    & source = USD from
    & format = 1  amount
    return
    */
    convertBadge(to, from, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const fee = yield this.getConvert([to], [from]);
            console.log(fee);
            const convertFee = fee[`${from}${to}`];
            console.log(fee[`${from}${to}`]);
            const resultConvert = amount * convertFee;
            console.log(resultConvert);
            return resultConvert;
            // response.json({ resultConvert}) 
        });
    }
}
exports.ConvertServe = ConvertServe;
