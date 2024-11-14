import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import {
    Color,
    DirectionalLightHelper,
  } from "three";


const DirectionalLightWith = (props) => {
    const directionalLightRef = useRef();

    return (
        <directionalLight
            ref={directionalLightRef}
            {...props}
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={3}
            shadow-camera-far={100}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            castShadow
        />
    );
};

export default DirectionalLightWith;