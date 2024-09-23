
import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../authentication/AuthContext';
import '../css/formUser.css'
const Login = () => {

  const uriBack = import.meta.env.VITE_URL_BACK;

  const [password_user, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const responseUri = await axios.post(`${uriBack}/login?password_user=${password_user}&email=${email}`);
      const token = responseUri.data.token;
      console.log(token)
      localStorage.setItem('token',token)
      login(token);
 
   

    } catch (error) {
      if (!password_user || email) {
        setError('Verifique que sus credenciales sean validas')
        return
      }
    }
  }



return(
  <>
 <div className='space container'>
  <form onSubmit={LoginUser}>
    
  <div className="containerForm">
  <h3>Currency</h3>
  <div className="form-group space">
  <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Correo electrico" />
  </div>
  <div className="form-group space">
  <input className='form-control' value={password_user} onChange={ (e) => setPassword(e.target.value)} type="text" placeholder="Contraseña"/>
  </div>
  <div className=''>
  <button className=' btn btn-primary space' id='submitBotton' type='submit'>Entrar</button>
  </div>
  
  </div>
  <br />
  <div className='form-group containerForm'>
    ¿No tienes cuenta? <a href="/register">Registrate</a>
    
  </div>
  </form>
  {error && <div className='alert alert-danger mt-3'>{error}</div>}
  </div>
  </>
)
}
export default Login;