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

  // const tittles = [
  //   "Introducción",
  //   "Sensibilización",
  //   "N/A"
  // ];

  const texts = [
    "Bienvenido a nuestra experiencia 3D sobre los problemas ambientales del agua. La contaminación del agua es uno de los problemas ambientales más graves que enfrenta el mundo. Desperdicios industriales, productos químicos y plásticos están alterando la calidad de ríos, lagos y océanos, afectando tanto a la fauna acuática como a las comunidades humanas que dependen de estos recursos. En nuestra experiencia, exploraremos cómo estos contaminantes dañan los ecosistemas y qué acciones podemos tomar para mitigar este grave problema.",
    "La escasez de agua es una crisis creciente que afecta a millones de personas alrededor del mundo. El uso excesivo, la mala gestión de los recursos y los efectos del cambio climático están reduciendo el acceso al agua potable. En esta sección, descubrirás cómo la falta de agua impacta a diversas regiones y cómo la conservación y el uso responsable pueden marcar la diferencia.",
    "La acidificación de los océanos es otro desafío emergente que está afectando a los ecosistemas marinos. El aumento de los niveles de CO2 en la atmósfera está disuelto en el agua del mar, alterando su química y poniendo en riesgo la vida marina. A través de nuestra experiencia, aprenderás cómo este fenómeno amenaza la biodiversidad oceánica y qué podemos hacer para frenar su avance."
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
                    <h2>BIENVENIDO</h2>
                    <div className="introduction-text">
                      <p>{texts[currentTextIndex]}</p>
                      <div className="button-container">
                        <button className="styled-button" onClick={prevText}>Anterior</button>
                        <button className="styled-button" onClick={nextText}>Siguiente</button>
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
