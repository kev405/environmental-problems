import { Center, Text, Text3D } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

const WelcomeText = ({ setTargetPosition, setTargetLookAt, handleShowHtml, nextText }) => {
  const moveCameraToNewTarget = () => {
    setTargetPosition(new THREE.Vector3(14.326031189977101, 14.303924841543708, 3.3270898092551917));
    setTargetLookAt(new THREE.Vector3(3.4122097168814642, 5.039213209879196, 12.4588383677463));
    handleShowHtml();
    console.log("Cambiando de texto");
  };

  // Manejar los eventos de teclas de flecha para mover la cámara
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          moveCameraToNewTarget();
          nextText();
          break;
        case "ArrowDown":
          setTargetPosition(new THREE.Vector3(-9.445855186052283, 5.831885020952239, -3.950013148400385));
          setTargetLookAt(new THREE.Vector3(-14.254039362526308, 2.686472104036879, -1.7887087400792328));
          break;
        case "ArrowLeft":
          setTargetPosition(new THREE.Vector3(-9.445855186052283, 5.831885020952239, -3.950013148400385));
          setTargetLookAt(new THREE.Vector3(-14.254039362526308, 2.686472104036879, -1.7887087400792328));
          break;
        case "ArrowRight":
          moveCameraToNewTarget();
          nextText();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setTargetPosition]);


  return (
    <>
      <Center top left position={[-12.5, 5, -2.5]}>
        <Text3D
          font="/fonts/blue-ocean.json"
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
          rotation={[0, Math.PI / 1.5, 0]}
        >
          {`Bienvenido`}
          <meshNormalMaterial/>
        </Text3D>
      </Center>
      <Text
        position={[-14.4, 3.37, -2.2]}
        color={"Black"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/blue-ocean.ttf"
        rotation={[0, Math.PI / 1.22, 0]}
        fontSize={0.58}
        onClick={moveCameraToNewTarget}
      >
        {" "}
        Contaminacion{" "}
      </Text>
      <Text
        position={[-14.4, 2.2, -2.2]}
        color={"RED"}
        anchorX={"center"}
        anchorY={"bottom"}
        font="/fonts/blue-ocean.ttf"
        rotation={[0, Math.PI / 1.5, 0]}
        fontSize={0.58}
      >
        {" "}
        Quiz{" "}
      </Text>
    </>
  );
};

export default WelcomeText;
