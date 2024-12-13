import LoginScene from "./LoginScene";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";



const Login = () => {
  const { user } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      console.log(newUser);
      UserDAO.createUser(newUser, newUser.email);
      
      navigate("/intro");
    }
  }, [user, navigate]);

  return <LoginScene />

};

export default Login;