import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./authentication/AuthContext"
import { useState } from "react";


const Navbar = () => {
  const { userId, logout} = useAuth();
  const {theme, setTeme} = useState('light');
  const navigate = useNavigate();
  console.log(userId)
  
  const hadleLogout = ()=> {
    logout();
    navigate('/login')
  };


  return(
    <div className="navbarPrin navbara ">
    <nav className="navbar navbar-expand-lg">
      <Link to="/">Currency</Link>
      {userId ? (
        <div className="space">
         
          <button className="btn btn-info">Apariencia</button> 
          <button className="btn btn-danger" onClick={hadleLogout}>Cerrar sesion</button>
        </div>
      ) : (
        <Link>Currency</Link>
      )}
    </nav>
    </div>
  )
}
export default Navbar