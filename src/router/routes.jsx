// routes.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import World from "../pages/world/World.jsx";
import Home from "../pages/home/home.jsx";
import Nosotros from "../pages/home/nosotros/nosotros.jsx";
import ProEscasez from "../components/escasez/ProEscasez.jsx";
import ProblemPollution from "../pages/water-pollution/ProblemPollution.jsx";
import Introduction from "../pages/introductionToPage/IntroductionPage.jsx";
import WaterAcidification from "../pages/waterAcidification/water_Acidification.jsx";
import DataTable from "../components/dataTable/DataTable.jsx";
import Form from "../components/form/Form.jsx";
import Reward from "../components/reward/reward.jsx";
import Question from "../pages/Questions/Question.jsx";

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
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/nosotros",
    element: <ProtectedRoute element={<Nosotros />} />,
  },
  {
    path: "/water-pollution",
    element: <ProtectedRoute element={<ProblemPollution />} />,
  },
  {
    path: "/intro",
    element: <ProtectedRoute element={<Introduction />} />,
  },
  {
    path: "/escasez", // Usar una ruta más clara
    element: <ProEscasez />, // Esta ruta no está protegida
  },
  {
    path: "/water-acidification",
    element: <ProtectedRoute element={<WaterAcidification />} />,
  },

  {
    path: "/table",
    element: <ProtectedRoute element={<DataTable />} />,
  },

  {
    path: "/form",
    element: <ProtectedRoute element={<Form />} />,
  },
  {
    path: "/rewards",
    element: <ProtectedRoute element={<Reward />} />,
  },
  {
    path: "/quiz",
    element: <ProtectedRoute element={<Question />} />,
  },
]);

export default router;
