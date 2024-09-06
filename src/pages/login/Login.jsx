import "./Login.css";
import { useCallback, useEffect, useState, Suspense } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Shapes from "../../components/Shapes";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      console.log(newUser);
      UserDAO.createUser(newUser, newUser.email);
      navigate("/world");
    }
    console.log(user);
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="login-wrapper">

      <div className="login-container">

        <Canvas className="canvas-3d" camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Shapes />
          </Suspense>
          <OrbitControls enableZoom={false} /> {/* Controlar rotación */}
        </Canvas>
      
        <h2 style={{ textAlign: "center" }}>Iniciar sesión</h2>

        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            closable
            onClose={() => setError(null)}
          />
        )}

        <Form
          name="login_form"
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Correo electrónico"
            rules={[
              { required: true, message: "Por favor ingresa tu correo electrónico" },
              { type: "email", message: "Por favor ingresa un correo electrónico válido" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Correo electrónico" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              { required: true, message: "Por favor ingresa tu contraseña" },
              { min: 6, message: "La contraseña debe tener al menos 6 caracteres" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading}>
              Iniciar sesión
            </Button>
          </Form.Item>

          <Form.Item>
          <Button onClick={handleLogin} style={{ width: "100%" }}>
            Iniciar sesión con google
          </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
