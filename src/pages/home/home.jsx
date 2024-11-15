import React, { useRef, useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import "./Home.css"; // Opcional: estilos personalizados
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Link } from "react-router-dom";

const RotatingCamera = () => {
  const cameraRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Rota la cámara horizontalmente alrededor del eje Y
    if (cameraRef.current) {
      cameraRef.current.position.x = Math.sin(elapsedTime) * 3; // Ajusta el radio de rotación
      cameraRef.current.position.z = Math.cos(elapsedTime) * 3; // Ajusta el radio de rotación
      cameraRef.current.position.y = 2; // Mantiene la altura de la cámara
      cameraRef.current.lookAt(0, 0, 0); // Asegura que siempre mire al centro de la escena
    }
  });

  return <perspectiveCamera ref={cameraRef} position={[3, 2, 5]} />;
};

const Home = () => {
  const { logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    console.log("Cerrando sesion");
    logout();
  }, [logout]);

  return (
    <div className="home-container" style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        {/* Elementos en la escena */}
        <RotatingCamera />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        <Environment
          files="/cubemap/sky/lakeside_2k.hdr"
          background={true} // Hace que el entorno sea el fondo
        />
      </Canvas>

      <div className="menu-container" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="menu-title">MENÚ</h1>
        <Link to="/nosotros" className="menu-link">
          <button className="menu-button">SOBRE NOSOTROS</button>
        </Link>
        <button className="menu-button">PROBLEMAS AMBIENTALES DEL AGUA</button>
        <button className="menu-button">EXPERIENCIAS INTERACTIVAS 3D</button>
        <button className="menu-button">RECURSOS EDUCATIVOS</button>
        <button className="menu-button">PARTICIPA</button>
        <button className="menu-button" onClick={handleLogout}>
          CERRAR SESION
        </button>
      </div>
    </div>
  );
};

export default Home;
