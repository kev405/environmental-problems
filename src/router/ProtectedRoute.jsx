import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";

const ProtectedRoute = ({ element }) => {

  const { user, loading } = useAuthStore();

  if (loading) {
    return <div>Cargando...</div>; // O muestra un spinner/loader mientras verificas la autenticación
  }

  if (!user) {
    return <Navigate to="/" />; // Redirige si el usuario no está autenticado
  }

  return element; // Si está autenticado, renderiza el componente
};

export default ProtectedRoute;