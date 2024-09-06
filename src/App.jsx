import router from "./router/routes.jsx";
import { RouterProvider } from "react-router-dom";
import useAuthStore from "./stores/use-auth-store.js";
import { useEffect } from "react";

function App() {

  const { observeAuthState } = useAuthStore();

useEffect(() => {
  observeAuthState();  // Inicia la observación del estado de autenticación al montar el componente
}, [observeAuthState]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
