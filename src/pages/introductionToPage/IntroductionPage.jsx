import "./IntroductionPage.css";
import { useEffect, useRef, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import DirectionalLightWith from "../water-pollution/components/DirectionalLigthWith";
import * as THREE from "three";
import CameraController from "../controls/CameraControls";
import Pollution from "../../models-jsx/introduccion/Pollution";
import Desert from "../../models-jsx/introduccion/Desert";
import { useNavigate } from "react-router-dom";
import OceanPollution from "../../models-jsx/water-pollution/OceanPollution";

const Introduction = () => {
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(2.065516344662408, 1.177377534621106, 1.1622635896972637));
  const [targetLookAt, setTargetLookAt] = useState(new THREE.Vector3(0.5673737627810265, -0.8617310986717684, 0.2149883422356182));
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navigate = useNavigate();
  const controlsRef = useRef();

  const moveCameraToNewTarget = (index) => {
    switch (index) {
      case 0:
        setTargetPosition(new THREE.Vector3(2.065516344662408, 1.177377534621106, 1.1622635896972637));
        setTargetLookAt(new THREE.Vector3(0.5673737627810265, -0.8617310986717684, 0.2149883422356182));
        break;
      case 1:
        setTargetPosition(new THREE.Vector3(8.079023546073936, 10.6046083861545, 2.9849141477641243));
        setTargetLookAt(new THREE.Vector3(0,0,0));
        break;
      case 2:
        setTargetPosition(new THREE.Vector3(14.326031189977101, 14.303924841543708, 3.3270898092551917));
        setTargetLookAt(new THREE.Vector3(3.4122097168814642, 5.039213209879196, 12.4588383677463));
        break;
      default:
        break;
    }
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
    "Bienvenido a nuestra experiencia 3D sobre los problemas ambientales del agua. El agua, el recurso más esencial para la vida, enfrenta amenazas graves debido a la actividad humana y los efectos del cambio climático. Nuestra página web te invita a explorar los desafíos más críticos que afectan este elemento vital: la escasez de agua, la contaminación que pone en peligro ecosistemas y comunidades, y la alarmante acidificación de los océanos, un fenómeno que amenaza la biodiversidad marina y el equilibrio del planeta.",
    "A través de modelos interactivos en 3D, te sumergirás en una experiencia visual y educativa que te permitirá comprender cómo estos problemas impactan nuestro mundo. Cada modelo ha sido diseñado para conectar la información científica con la realidad cotidiana, ayudándote a visualizar los efectos y las posibles soluciones.",
    "El cambio comienza con el conocimiento, y tú puedes ser parte de la solución. ¡Acompáñanos en este viaje interactivo y descubre cómo podemos cuidar el agua, la vida y nuestro planeta!"
  ];

  const prevText = () => {
  const newIndex = (currentTextIndex - 1 + texts.length) % texts.length;
  setCurrentTextIndex(newIndex);
  moveCameraToNewTarget(newIndex);
};

const nextText = () => {
  if (currentTextIndex + 1 == 3) {
    navigate("/home");
  }
  const newIndex = (currentTextIndex + 1) % texts.length;
  setCurrentTextIndex(newIndex);
  moveCameraToNewTarget(newIndex);
};

  const handleCameraChange = () => {
    // Obtiene el objetivo actual de la cámara (target) cuando OrbitControls cambia
    if (controlsRef.current) {
      console.log(controlsRef);
    }
  };

  return (
    <>
        <Canvas>
            <DirectionalLightWith position={[10, 10, 0]} intensity={10}/>
            <CameraController targetPosition={targetPosition} targetLookAt={targetLookAt} />
            {/* <OrbitControls ref={controlsRef} onChange={handleCameraChange} /> */}
            {currentTextIndex >= 0 && currentTextIndex < texts.length && (
              <>
                {currentTextIndex === 0 && <Desert />}
                {currentTextIndex === 1 && <Pollution />}
                {currentTextIndex === 2 && <OceanPollution />}
                <Html center>
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
              </>
            )}
            {currentTextIndex == 1 && ( // Renderiza el HTML solo si showHtml es true
            <>
              <Pollution />
              <Html center >
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
            </>
            )}
            {currentTextIndex == 2 && ( // Renderiza el HTML solo si showHtml es true
            <>
              <OceanPollution />
              <Html center >
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
            </>
            )}
        </Canvas>
    </>
  );
};

export default Introduction;
