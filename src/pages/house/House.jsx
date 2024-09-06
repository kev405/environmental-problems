/* eslint-disable react/no-unknown-property */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const House = () => {
  const trunkRef = useRef();
  const foliageRef = useRef();

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();

    if (foliageRef.current) {
      foliageRef.current.position.y = Math.cos(elapsedTime) * 0.5 + 2.5; // Oscila ligeramente arriba y abajo
    }

  });

  return (
    <group>
      <mesh ref={trunkRef} position-y={1}>
        <boxGeometry args={[0.5, 2, 0.5]} /> 
        <meshPhysicalMaterial color={"saddlebrown"} roughness={0.8} />
      </mesh>

      <mesh ref={foliageRef} position={[0, 2.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} /> 
        <meshPhysicalMaterial color={"green"} roughness={0.7} />
      </mesh>
    </group>
  );
};

export default House;
