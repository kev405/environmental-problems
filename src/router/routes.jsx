// routes.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import World from "../pages/world/World.jsx";
import Home from "../pages/home/home.jsx";
import Nosotros from "../pages/home/nosotros/nosotros.jsx"; 
import ProblemPollution from "../pages/water-pollution/ProblemPollution.jsx";
import IntroductionPage from "../pages/introductionToPage/IntroductionPage.jsx";


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
    element: <ProtectedRoute element={<ProblemPollution />} />
  },
  {
    path: "/intro",
    element: <ProtectedRoute element={<IntroductionPage />} /> 
  },
]);

export default router;
