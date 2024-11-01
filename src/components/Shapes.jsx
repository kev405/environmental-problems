import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Shapes = (props) => {

  const sphereRef = useRef();
  let time = 0;
  const groupRef = useRef();

  const { nodes, materials } = useGLTF('models-3d/blue_whale.glb');
  const whaleWhite = useGLTF('models-3d/blue_whale.glb');
  console.log(whaleWhite);

  // Rotación automática
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group name="Scene">
        <group
          name="Body"
          position={[-2.056, 0.695, 0.004]}
          rotation={[0, -0.055, -2.671]}
          scale={0.57}>
          <mesh
            name="Cone"
            castShadow
            receiveShadow
            geometry={nodes.Cone.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cone_1"
            castShadow
            receiveShadow
            geometry={nodes.Cone_1.geometry}
            material={materials.Jaw}
          />
        </group>
        <group
          name="Reye"
          position={[-0.17, 0.324, 0.943]}
          rotation={[1.185, -0.138, 0.326]}
          scale={[0.191, 0.172, 0.189]}>
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.Pupille}
          />
          <mesh
            name="Circle_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Material}
          />
        </group>
        <group
          name="Leye"
          position={[-0.079, 0.324, -0.719]}
          rotation={[-1.173, 0.096, -2.918]}
          scale={[-0.191, -0.172, -0.189]}>
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials.Pupille}
          />
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.Material}
          />
        </group>
        <mesh
          name="Rfin"
          castShadow
          receiveShadow
          geometry={nodes.Rfin.geometry}
          material={materials.Body}
          position={[-0.809, -0.326, 0.754]}
          rotation={[0.029, -0.552, 0.041]}
          scale={[0.495, 0.187, 0.073]}
        />
        <mesh
          name="LFin"
          castShadow
          receiveShadow
          geometry={nodes.LFin.geometry}
          material={materials.Body}
          position={[-0.735, -0.326, -0.596]}
          rotation={[-0.027, 0.442, -3.104]}
          scale={[-0.495, -0.187, -0.073]}
        />
      </group>
    </group>
  );
};

export default Shapes;
useGLTF.preload('models-3d/blue_whale.glb');