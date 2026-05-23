import { useContext } from "react";
import { ShpoContext } from "./ShpoContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { token } = useContext(ShpoContext);

  console.log("Token inside ProtectedRoute:", token);

  if (!token) {
     return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;