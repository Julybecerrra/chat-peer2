import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const {userId} = useAuth();

  
    if (!userId) {
      console.log('Usuario no autenticado');
      return <Navigate to="/login" />
    }
    console.log('acceso denegado ')
   
}