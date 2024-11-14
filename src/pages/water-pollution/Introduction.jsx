import "./Introduction.css";
import { useRef, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import OceanPollution from "../../models-jsx/water-pollution/OceanPollution";
import Turttle from "../../models-jsx/water-pollution/TurttlePollution";
import Turttle2 from "../../models-jsx/water-pollution/TurttlePollution2";
import MenuPollution from "../../models-jsx/water-pollution/MenuPollution";
import DirectionalLightWith from "./components/DirectionalLigthWith";
import * as THREE from "three";
import CameraController from "../controls/CameraControls";
import WelcomeText from "./components/WelcomeText";

const Introduction = () => {
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(-9.445855186052283, 5.831885020952239, -3.950013148400385));
  const [targetLookAt, setTargetLookAt] = useState(new THREE.Vector3(-14.254039362526308, 2.686472104036879, -1.7887087400792328));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showHtml, setShowHtml] = useState(false);
  const controlsRef = useRef();

  // const moveCameraToNewTarget = () => {
  //   setTargetPosition(new THREE.Vector3(14.326031189977101, 14.303924841543708, 3.3270898092551917));
  //   setTargetLookAt(new THREE.Vector3(3.4122097168814642, 5.039213209879196, 12.4588383677463));
  // };

  const handleShowHtml = () => {
    setShowHtml(true);
  };

  const { loading } =
    useAuthStore();

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  const tittles = [
    "Introducción",
    "Sensibilización",
    "N/A"
  ];

  const texts = [
    "La contaminación del agua es una crisis mundial en aumento que afecta nuestras fuentes de agua dulce esenciales para el consumo humano y la biodiversidad. Diversos contaminantes, desde plásticos hasta sustancias químicas como los PFAS, se infiltran en ríos, lagos y océanos, amenazando la salud humana y la vida silvestre. Estudios recientes han detectado microcontaminantes orgánicos en áreas protegidas, evidenciando la magnitud del problema. Además, el cambio climático intensifica estos desafíos, alterando el ciclo natural del agua y exacerbando la contaminación. Es imperativo implementar medidas efectivas para proteger y preservar nuestros recursos hídricos.",
    "La contaminación del agua es una realidad alarmante que afecta a todas las formas de vida en el planeta. Cada día, nuestras fuentes de agua dulce—vitales para el consumo humano, la agricultura y la biodiversidad—son contaminadas por plásticos, productos químicos y desechos industriales. La presencia de microcontaminantes en áreas protegidas y los efectos del cambio climático solo agravan este problema, intensificando la escasez de agua limpia. Para asegurar un futuro sostenible, debemos actuar hoy. Reducir el uso de plásticos, evitar el desperdicio de agua y exigir prácticas responsables a las industrias son pasos esenciales para proteger nuestros recursos hídricos y garantizar que futuras generaciones también puedan disfrutarlos.",
    "Frente a esta situación, es crucial implementar regulaciones ambientales más estrictas..."
  ];

  // Función para cambiar al texto anterior
  const prevText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  // Función para cambiar al siguiente texto
  const nextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCameraChange = () => {
    // Obtiene el objetivo actual de la cámara (target) cuando OrbitControls cambia
    if (controlsRef.current) {
      console.log(controlsRef);
    }
  };

  return (
    <>
    <Canvas shadows>
      <DirectionalLightWith position={[10, 10, 0]} intensity={10}/>
      <CameraController targetPosition={targetPosition} targetLookAt={targetLookAt} />
      <OrbitControls ref={controlsRef} onChange={handleCameraChange} />
      <OceanPollution/>
      <Turttle position={[-15, 3, 4]} castShadow />
      <Turttle2 position={[-11, 1, -3]} castShadow />
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.2, 32, 32]} // Tamaño de la burbuja
          position={[
            (Math.random() - 0.5) * 30,
            Math.random() * 20,
            (Math.random() - 0.5) * 30,
          ]} // Posición aleatoria en el espacio
        >
          <meshStandardMaterial
            color="lightblue"
            opacity={0.5}
            transparent
            emissive="blue"
          />
        </Sphere>
      ))}
      <MenuPollution position={[-15, 3, 0]} />
      <WelcomeText setTargetPosition={setTargetPosition} setTargetLookAt={setTargetLookAt} handleShowHtml={handleShowHtml}/>
      {showHtml && ( // Renderiza el HTML solo si showHtml es true
          <Html center position={[10,11,24]}>
            <div className="login-container">
              <h2>{tittles[currentTextIndex]}</h2>
              <div className="introduction-text">
                <p>{texts[currentTextIndex]}</p>
                <div className="button-container">
                  <button onClick={prevText}>Anterior</button>
                  <button onClick={nextText}>Siguiente</button>
                </div>
              </div>
            </div>
          </Html>
      )}
    </Canvas>
  </>
  );
};

export default Introduction;
