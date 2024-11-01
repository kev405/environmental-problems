import "./Login.css";
import { useCallback, useEffect, useState, Suspense } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import Shapes from "../../components/Shapes";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Login = () => {
  const { user, loginGoogleWithPopUp, observeAuthState, loading } =
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

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="login-wrapper">

      <div className="login-container">

        <div className="shapes-animation">
          <Canvas className="canvas-3d" camera={{ position: [0, 0, 10], fov: 19 }}>
            <ambientLight intensity={1.5} /> {/* Luz ambiental para iluminar todo el modelo */}
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow /> {/* Luz direccional para crear sombras y detalles */}
            <Suspense fallback={null}>
              <Shapes />
            </Suspense>
            <OrbitControls enableZoom={false} /> {/*Controlar rotación */}
          </Canvas>
        </div>

        <h2>Iniciar sesión</h2>

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
            rules={[
              { required: true, message: "Por favor ingresa tu correo electrónico" },
              { type: "email", message: "Por favor ingresa un correo electrónico válido" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Correo electrónico" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingresa tu contraseña" },
              { min: 6, message: "La contraseña debe tener al menos 6 caracteres" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="login-button">
              Iniciar sesión
            </Button>
          </Form.Item>

          <div className="social-login">
            <Button icon={<FacebookOutlined />} className="social-button fb-button" />
            <Button icon={<GoogleOutlined />} onClick={handleLogin} className="social-button google-button" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
