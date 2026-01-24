import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useContext } from "react";


export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/dashboard", { replace: true });
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
