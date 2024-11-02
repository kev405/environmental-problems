// routes.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import World from "../pages/world/World.jsx";
import Home from "../pages/home/home.jsx";
import Nosotros from "../pages/home/nosotros/nosotros.jsx"; 


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
    path: "/nosotros", element: <ProtectedRoute element={<Nosotros />} /> 
  },
]);

export default router;
