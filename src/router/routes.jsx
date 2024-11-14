// routes.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import World from "../pages/world/World.jsx";
import Home from "../pages/home/home.jsx";
import Nosotros from "../pages/home/nosotros/nosotros.jsx"; 
<<<<<<< HEAD
import  ProEscasez  from "../components/escasez/ProEscasez.jsx";
=======
import Introduction from "../pages/water-pollution/Introduction.jsx";
>>>>>>> 3685a5f990d2c7a5a35a34d099ba4b5deaabd1da


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/world",
    element: <ProtectedRoute element={<World />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} /> 
  },
  { 
    path: "/nosotros", 
    element: <ProtectedRoute element={<Nosotros />} /> 
  },
  {
    path: "/water-pollution",
    element: <ProtectedRoute element={<Introduction />} />
  },
  {
    path: "/escasez", // Usar una ruta más clara
    element: <ProEscasez/> // Esta ruta no está protegida
  }
]);

export default router;
