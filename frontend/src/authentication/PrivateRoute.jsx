import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export const PrivateRoute = ({ component: RouteComponent, ...res }) => {
  const {userId} = useAuth();

    if (!userId) {
      console.log('Usuario no autenticado');
      return <Navigate to="/login" />
    }

return <Route {...res} element={<RouteComponent />} />;
}