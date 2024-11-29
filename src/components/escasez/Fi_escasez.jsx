import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox } from "@react-three/cannon";
import { Text, OrbitControls } from "@react-three/drei";

export default function EscenaEscasez() {
  const [lineas, setLineas] = useState([]);
  const timerRef = useRef();
  const distanciaEntreLineas = 0.4;

  useEffect(() => {
    const textoCompleto = [
      "SOLUCIONES PARA LA ESCASEZ DEL AGUA",
      // "Conservación del agua: Reducir el consumo y promover el uso eficiente en hogares e industrias.",
      // "Mejora de infraestructuras: Reparar fugas y optimizar el sistema de distribución de agua.",
      // "Desalinización: Utilizar agua de mar en regiones costeras para aumentar el suministro.",
      // "Captación de agua de lluvia: Implementar tecnologías para recolectar y almacenar agua de lluvia.",
      // "Agricultura sostenible: Adoptar prácticas agrícolas que reduzcan el uso de agua y eviten el desperdicio.",
    ];

    let index = 0;
    timerRef.current = setInterval(() => {
      if (index < textoCompleto.length) {
        setLineas((prevLineas) => [...prevLineas, textoCompleto[index]]);
        index += 1;
      } else {
        clearInterval(timerRef.current);
      }
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, []);


  

  const FallingText = ({ texto }) => {
    const [ref] = useBox(() => ({
      mass: 1,
      position: [0, 10, 0],
      args: [3, 1, 1],
      restitution: 0.4,
    }));
  
    return (
      <>
        <mesh ref={ref} position={[0, 10, 0]} visible={false}>
          <boxGeometry args={[3, 1, 1]} />
          <meshStandardMaterial transparent opacity={0} />
        </mesh>
        <Text
          position={[0, 0, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {texto}
        </Text>
      </>
    );
  };

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50 }}
      style={{ background: "#282c34" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls />
      <Physics gravity={[0, -9.8, 0]}>
        <mesh receiveShadow>
          <boxGeometry args={[10, 0.5, 10]} />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
        {lineas.map((texto, index) => (
          <FallingText
            key={index}
            texto={texto}

          />
        ))}
      </Physics>
    </Canvas>
  );
}