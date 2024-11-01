import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Island = (props) => {

    const groupRef = useRef();
    const { nodes, materials } = useGLTF('models-3d/wood_signal.glb');
    const islandProps = useGLTF('models-3d/wood_signal.glb');
    console.log(islandProps);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SignPost.geometry}
                material={materials['Material.001']}
            />
        </group>
    );
};

export default Island;
useGLTF.preload('models-3d/wood_signal.glb');