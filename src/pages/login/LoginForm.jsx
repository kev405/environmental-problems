import "./Login.css";
import { useState, useCallback, Suspense } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined, AppleOutlined } from "@ant-design/icons";
import { OrbitControls } from "@react-three/drei";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import Shapes from "../../components/Shapes";

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState(null);
  const { user, loginGoogleWithPopUp, observeAuthState, loading, loginFacebookWithPopUp, loginAppleWithPopUp, register, login } = useAuthStore();

  const handleLogin = useCallback(() => loginGoogleWithPopUp(), [loginGoogleWithPopUp]);
  const handleLoginFacebook = useCallback(() => loginFacebookWithPopUp(), [loginFacebookWithPopUp]);
  const handleLoginApple = useCallback(() => loginAppleWithPopUp(), [loginAppleWithPopUp]);
  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(null);
  };
  const handleRegister = useCallback((values) => register(values), [register]);
  const handleLoginWithEmail = useCallback((values) => login(values), [login]);

  return (
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
        <Form name="login_form" layout="vertical" onFinish={handleLoginWithEmail}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Ingresa tu correo electrónico" }, { type: "email", message: "Correo inválido" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Correo electrónico" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Ingresa tu contraseña" }, { min: 6, message: "Al menos 6 caracteres" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Iniciar sesión
            </Button>
          </Form.Item>
          <div className="social-login">
            <Button icon={<FacebookOutlined />} onClick={handleLoginFacebook} className="social-button fb-button" />
            <Button icon={<GoogleOutlined />} onClick={handleLogin} className="social-button google-button" />
            {/* <Button icon={<AppleOutlined />} onClick={handleLoginApple} className="social-button apple-button" /> */}
          </div>
          <Button type="link" onClick={handleToggleForm} className="toggle-form-button">
            ¿No tienes una cuenta? Regístrate
          </Button>
        </Form>
      ) : (
        <Form name="register_form" layout="vertical" onFinish={handleRegister}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Ingresa tu nombre completo" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Nombre completo" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Ingresa tu correo electrónico" }, { type: "email", message: "Correo inválido" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Correo electrónico" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Ingresa tu contraseña" }, { min: 6, message: "Al menos 6 caracteres" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Registrarse
            </Button>
          </Form.Item>
          <Button type="link" onClick={handleToggleForm} className="toggle-form-button">
            ¿Ya tienes una cuenta? Inicia sesión
          </Button>
        </Form>
      )}
    </div>
  );
};

export default LoginForm;
