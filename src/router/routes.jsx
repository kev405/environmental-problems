// routes.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import World from "../pages/world/World.jsx";
import Home from "../pages/home/home.jsx";
import Nosotros from "../pages/home/nosotros/nosotros.jsx"; 
import  ProEscasez  from "../components/escasez/ProEscasez.jsx";
import Introduction from "../pages/water-pollution/Introduction.jsx";
import WaterAcidification from "../pages/waterAcidification/water_Acidification.jsx";


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
    element: <ProtectedRoute element={<Introduction/>} />
  },
  {
    path: "/escasez", // Usar una ruta más clara
    element: <ProEscasez/> // Esta ruta no está protegida
  }, {
    path: "/water-acidification",
    element: <ProtectedRoute element={<WaterAcidification />} />
  },
]);

export default router;
