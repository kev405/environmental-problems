/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import Escasez from "./Escasez";

export const ProEscasez = () => {
  // Estado para controlar la visibilidad del div
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isLeft, setIsLeft] = useState(false);

  // Función para mostrar/ocultar el div
  const handleButtonClick = () => {
    if (!isLeft && !isDivVisible) {
      setIsDivVisible(true); // Muestra el div
      setIsLeft(!isLeft); // Cambia el estado al hacer clic
    } else if (!isLeft && isDivVisible) {
      setIsLeft(!isLeft); // Cambia el estado al hacer clic
    } else {
      setIsDivVisible(!isDivVisible);
      // Cambia el estado al hacer clic
    }
  };

  const handleButtonClickDerecho = () => {
    if (!isLeft && !isDivVisible) {
      setIsDivVisible(!isDivVisible); // Muestra el div
    } else if (isLeft && isDivVisible) {
      setIsLeft(!isLeft); // Cambia el estado al hacer clic
    } else {
      setIsLeft(false);
      setIsDivVisible(!isDivVisible); // Cambia el estado al hacer clic
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [0, 5, 15] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={5} />

        <Escasez />

        {/* Título HTML fijado en el entorno 3D */}
        <Html position={[0, 8, 0]} center>
          <h1
            style={{
              color: "black",
              fontSize: "3rem",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            ESCASEZ DEL AGUA
          </h1>
        </Html>

        {/* Botón en la esquina superior izquierda */}
        <Html position={[-10, 7, 0]} center>
          <button
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem 1rem",
            }}
            onClick={handleButtonClick} // Cambia el estado al hacer clic
          >
            Introducción
          </button>
        </Html>

        {/* Botón en la esquina superior derecha */}
        <Html position={[10, 7, 0]} center>
          <button
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem 1rem",
            }}
            onClick={handleButtonClickDerecho} // Cambia el estado al hacer clic
          >
            Sensibilización
          </button>
        </Html>

        {/* Mostrar el div solo si isDivVisible es true */}
        <Html position={[0, 0, 0]} center>
          <div
            style={{
              display: isDivVisible ? "flex" : "none", // Mostrar u ocultar según el estado
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              width: "50vw", // 50% de la pantalla en anchura
              height: "50vh", // 50% de la pantalla en altura
              position: "absolute", // Asegura que el div se coloque de forma absoluta
              top: "50%", // Centrado verticalmente
              left: "50%", // Centrado horizontalmente
              transform: "translate(-50%, -50%)", // Ajuste para centrar el div
            }}
          >
            <a style={{ color: "black" }}>
              {isLeft ? <a> es izquierda</a> : <a> es derecha</a>}
            </a>
          </div>
        </Html>

        <OrbitControls enablePan={true} enableZoom={true} />

        <Environment
          files="/cubemap/tierra-hdr/dry_cracked_lake_2k.hdr"
          background={true}
        />
      </Canvas>
    </div>
  );
};

export default ProEscasez;
