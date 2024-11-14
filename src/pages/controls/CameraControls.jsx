import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CameraController = ({ targetPosition, targetLookAt }) => {
    const controlsRef = useRef();
    const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(-17, 8, 1));
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0));
  
    useFrame(() => {
        cameraPosition.lerp(targetPosition, 0.05);
        setCameraPosition(cameraPosition.clone());
    
        cameraTarget.lerp(targetLookAt, 0.05);
        setCameraTarget(cameraTarget.clone()); 
    
        if (controlsRef.current) {
          controlsRef.current.object.position.copy(cameraPosition);
          controlsRef.current.target.copy(cameraTarget);
          controlsRef.current.update();
        }
      });
    
      return <OrbitControls ref={controlsRef} />;
  };

export default CameraController;