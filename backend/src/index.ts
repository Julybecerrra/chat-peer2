import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/convert"


dotenv.config();

const port = process.env.PORT || 3000;
const back = process.env.DB_HOST || '  http://localhost'
const app = express()
app.use(cors())
app.use('/convert', router)




app.get("/", (req: Request, res: Response) =>{
  res.send("hello, Type!");
});
//console.log('API Access URL:', process.env.API_ACCESS_URL);

app.listen(port, () => {
  console.log(`Server is runnin on the port ${back}:${port} `)
})