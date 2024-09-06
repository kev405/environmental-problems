import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";

const ProtectedRoute = ({ element }) => {

  const { user, loading } = useAuthStore();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;