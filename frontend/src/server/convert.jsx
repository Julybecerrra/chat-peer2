import React from 'react'
import { useState } from 'react'
import '../App.css'
import '../Style.css'

import envio from "../img/enviarLogo.png"
import flechas from "../img/dos-flechas.png"

const Convert = () => {


  const uriBack = import.meta.env.VITE_URL_BACK;
  console.log(uriBack)
  
  const [amount, setAmount] = useState('')
  const [to, setTo] = useState('COP')
  const [from, setFrom] = useState('USD')
  const [result, setResult] = useState('')
 const [error, setError] = useState('')
 // console.log(import.meta.env); // verifica imprime todas las variables de entorno existentes

const ConvertServe = async () => {
 
try {
  const response = await fetch(`${uriBack}?amount=${amount}&from=${from}&to=${to}`);
 // http://localhost:3000/convert/convertserve?amount=1&from=USD&to=COP
  const data = await response.json();
  //CAMBIOOOO
  console.log(data)
  //se toma el dato resultado
  setResult(data.resultado)
  if (!response.ok) {
    console.log('Error en la conevrsion Intentelo nuevamente')

  }
} catch (error) {
  setResult(null)
  console.log(error.message);
}
}


  return (
    <>
      <div className='columns'>
        <div className=' containertable'>
          <button>Toggle Theme</button>
          <button>Sign Out</button>
        </div>
        <div className='container '>
          <div className='containerSearch'> 
          <div className='resultSearch'> {result !== null && <div> <p>El resultado de: </p>{amount}{from} = {result}{to}</div>}</div>
     
     <div className='data'>
       <input className='contenInput' type="number" name="amount" id="amount"  placeholder='amount' onChange={(e) => setAmount(e.target.value)}  
       />
       
       <select className='contenInput' type="number" name="from" id="from" placeholder='from' onChange={(e) => setFrom(e.target.value)}>
         <option value="USD">USD</option>
         <option value="COP">COP</option>
         <option value="EUR">EUR</option>
       </select>
       <img  className='iconsInput' src={flechas} alt="" />
       <select className='contenInput' type="number" name="to" id="to" placeholder='to' onChange={(e) =>setTo(e.target.value)}>
         <option value="COP">COP</option>
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
       </select>
     <br />
       <button className='envio' onClick={ConvertServe} ><img src={envio} alt="Enviar" title='Enviar'/></button>

     </div>
</div>
          </div>
        


      </div>
    
    </> 
  )
}
export default Convert;