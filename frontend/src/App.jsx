import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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

const save = async (e) => {

}
  return (
    <>
      <div>
      {result !== null && <p>Resulatdo: {result}</p>}
        <input type="number" name="amount" id="amount"  placeholder='amount' onChange={(e) => setAmount(e.target.value)} />
        <p>desde</p>
        <select type="number" name="from" id="from" placeholder='from' onChange={(e) => setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="COP">COP</option>
          <option value="EUR">EUR</option>
        </select>
        <p>a</p>
        <select type="number" name="to" id="to" placeholder='to' onChange={(e) =>setTo(e.target.value)}>
          <option value="COP">COP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <br />
        <button onClick={ConvertServe} value="Enviar">Enviar</button>
   

      </div>
    
    </>
  )
}

export default App
