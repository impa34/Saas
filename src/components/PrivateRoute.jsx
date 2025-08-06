import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/landing" />;
}

export default PrivateRoute;
