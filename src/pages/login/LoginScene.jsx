// LoginScene.js
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import OceanLogin from "../../models-jsx/Login/OceanLogin";
import Turttle from "../../models-jsx/Login/TurttleLogin";
import Turttle2 from "../../models-jsx/Login/TurttleLogin2";
import LoginForm from "./LoginForm";

const LoginScene = () => {
  const cameraSettings = { position: [-17, 8, 1] };

  return (
    <Canvas camera={cameraSettings}>
      <ambientLight position={[-13, 8, 3]} intensity={5} />
      <OceanLogin />
      <Turttle position={[-15, 8, 2]} />
      <Turttle2 position={[-15, 5, 1]} />
      <Html center>
        <LoginForm />
      </Html>
    </Canvas>
  );
};

export default LoginScene;
