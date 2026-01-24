import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth(); // false -> true


  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // children
}
