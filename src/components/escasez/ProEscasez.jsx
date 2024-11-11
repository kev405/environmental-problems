/* eslint-disable react/no-unknown-property */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Escasez from "./Escasez";

export const ProEscasez = () => {
  return (
    <div
      style={{
        height: "100vh", // Toda la altura de la ventana
        width: "100vw", // Toda la anchura de la ventana
        overflow: "hidden" // Para evitar barras de desplazamiento
      }}
    >
      <Canvas>
        {/* Luz ambiental básica */}
        <ambientLight intensity={0.9} />
        {/* Luz direccional para iluminar desde un ángulo específico */}
        <directionalLight position={[10, 10, 10]} intensity={5} />
        <Escasez />
        <OrbitControls />
        {/* Entorno aplicado al fondo de la escena */}
        <Environment
          files="/cubemap/tierra-hdr/dry_cracked_lake_2k.hdr"
          background={true}
        />
      </Canvas>
    </div>
  );
};

export default ProEscasez;
