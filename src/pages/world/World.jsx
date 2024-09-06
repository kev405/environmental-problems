/* eslint-disable react/no-unknown-property */
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import House from "../house/House";
import "./World.css";

const World = () => {
  return (
    <div className="world-container">
      <Canvas
        camera={{
          position: [2, 0, 5],
        }}
      >
        <TrackballControls
          zoomSpeed={1.2} // Velocidad del zoom
          panSpeed={0.8}  // Velocidad del desplazamiento (pan)
          rotateSpeed={1.0} // Velocidad de la rotación
          dynamicDampingFactor={0.1} // Amortiguación para movimiento más suave
          />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <House />
      </Canvas>
    </div>
  );
};

export default World;
