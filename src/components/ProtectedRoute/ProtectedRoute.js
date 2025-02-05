import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Caricamento...</div>; // Mostra un indicatore di caricamento
  }

  return children;
  // return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
