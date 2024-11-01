import "./Login.css";
import { useCallback, useEffect, useState, Suspense, useMemo } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { GoogleOutlined, FacebookOutlined, AppleOutlined } from "@ant-design/icons";
import Shapes from "../../components/Shapes";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import OceanLogin from "../../models-jsx/Login/OceanLogin";
import Turttle from "../../models-jsx/Login/Turttle";
import Turttle2 from "../../models-jsx/Login/Turttle2";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState(null);

  const cameraSettings = {
    position: [-17, 8, 1],
  };

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "escape", keys: ["Escape"] },
    ],
    []
  );

  const { user, loginGoogleWithPopUp, observeAuthState, loading, loginFacebookWithPopUp, loginAppleWithPopUp, register, login } =
    useAuthStore();

  const navigate = useNavigate();

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
      navigate("/home");
    }
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLoginFacebook = useCallback(() => {
    loginFacebookWithPopUp();
  }, [loginFacebookWithPopUp]);

  const handleLoginApple = useCallback(() => {
    loginAppleWithPopUp();
  }, [loginAppleWithPopUp]);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(null);
  };

  const handleRegister = useCallback((values) => {
    register(values);
  }, [register]);

  const handleLoginWithEmail = useCallback((values) => {
    login(values);
  }, [login]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <Canvas camera={cameraSettings}>
      <ambientLight position={[-13, 8, 3]} intensity={5} />
      <OceanLogin />
      <Turttle position={[-15, 8, 2]} />
      <Turttle2 position={[-15, 5, 1]} />
      <Html center>
        <div className="login-container">
          <div className="shapes-animation">
            <Canvas className="canvas-3d" camera={{ position: [0, 0, 10], fov: 19 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
              <Suspense fallback={null}>
                <Shapes />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

          <h2>{isLoginForm ? "Iniciar sesión" : "Registrarse"}</h2>

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

          {isLoginForm ? (
            <Form
              name="login_form"
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={handleLoginWithEmail}
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
                <Button icon={<FacebookOutlined />} onClick={handleLoginFacebook} className="social-button fb-button" />
                <Button icon={<GoogleOutlined />} onClick={handleLogin} className="social-button google-button" />
                <Button icon={<AppleOutlined />} onClick={handleLoginApple} className="social-button apple-button" />
              </div>

              <Button type="link" onClick={handleToggleForm} className="toggle-form-button">
                ¿No tienes una cuenta? Regístrate
              </Button>
            </Form>
          ) : (
            <Form
              name="register_form"
              initialValues={{ remember: true }}
              layout="vertical"
              onFinish={handleRegister}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Por favor ingresa tu nombre completo" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Nombre completo" />
              </Form.Item>

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
                  Registrarse
                </Button>
              </Form.Item>

              <Button type="link" onClick={handleToggleForm} className="toggle-form-button">
                ¿Ya tienes una cuenta? Inicia sesión
              </Button>
            </Form>
          )}
        </div>
      </Html>
    </Canvas>
  );
};

export default Login;
