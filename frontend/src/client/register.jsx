
import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
const Register = () => {

  const uriBack = import.meta.env.VITE_URL_BACK;

  const [username, setUsername] = useState('')
  const [password_user, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const store = async(e) => {
    e.preventDefault();
    try{
       await axios.post(`${uriBack}/register?username=${username}&password_user=${password_user}&email=${email}`);
      navigate('/')
    }catch{
        setError('Usuario o email ya esta en uso, Intentalo de nuevo')
        return
    }
  }

return(
  <>
  <form onSubmit={store}>

  <div className="containerForm">
  <h3>Currency</h3>
  <span>Registrate para ver tus conversiones realizadas</span>
  <div className="form-group space">
    <input className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
    </div>
    <div className="form-group space">
  <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
  </div>
  <div className="form-group space">
  <input className='form-control' value={password_user} onChange={ (e) => setPassword(e.target.value)} type="text" placeholder="Password"/>
  </div>


  <button className='btn btn-primary space ' id='submitBotton' type='submit'>Enviar</button>
  
 
  
  </div>
  <br />
  <div className='form-group containerForm'>
    ¿Tines una cuenta? <a href="/login">Entrar</a>
    
  </div>
  </form>
  {error && <div className='alert alert-danger mt-3'>{error}</div>}
  </>
)
}
export default Register;