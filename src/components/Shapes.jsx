import React, { useRef } from "react";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Shapes = () => {
    

    const sphereRef = useRef();
    let time = 0;

    useFrame(() => {
        time += 0.05;
        sphereRef.current.position.y = Math.cos(time) * 2;
      });

    return (
      <>
        <Sphere ref={sphereRef} args={[1.5, 32, 32]}>
          <meshStandardMaterial attach="material" color="lightblue" />
        </Sphere>

        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
      </>
    );
  };

  export default Shapes;