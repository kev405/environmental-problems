import { Center, Text, Text3D } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

const WelcomeText = ({ setTargetPosition, setTargetLookAt, handleShowHtml }) => {
  const moveCameraToNewTarget = () => {
    setTargetPosition(new THREE.Vector3(14.326031189977101, 14.303924841543708, 3.3270898092551917));
    setTargetLookAt(new THREE.Vector3(3.4122097168814642, 5.039213209879196, 12.4588383677463));
    handleShowHtml();
    console.log("Cambiando de texto");
  };


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
