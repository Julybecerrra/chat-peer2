import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { getUserId } from "../user/apiUserId";
getUserId;

const AuthContext = createContext();

export const useAuth = () => 
  { const context =useContext(AuthContext);
if(!context){
  throw new Error(' useAuth debe usarse dentro de un AuthProvider')
}

return context
 

}

export const AuthProvider = ({children}) => {
  
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken= jwtDecode(token);
      setUserId(decodedToken.UserId);
      
    }
  }, [])

  const login = (token) => {
    if (token) {
      const decodedToken = jwtDecode(token)
      setUserId(decodedToken.UserId)

      console.log(decodedToken.UserId)
      console.log(UserId)
      localStorage.setItem('token', token)
      console.log(token)
      console.log('login suscees')
    }
    else{
      console.error('Token is indefined')
    }

  };


  const logout = () => {
    setUserId(null)
    localStorage.removeItem('token')
  
  };


  return(
    <AuthContext.Provider value={{userId, login, logout}}>
      {children}
      </AuthContext.Provider>
  );
}