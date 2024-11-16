import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CameraController = ({ targetPosition, targetLookAt }) => {
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      const camera = controlsRef.current.object;

      // Interpolar la posición de la cámara
      camera.position.lerp(targetPosition, 0.05);

      // Interpolar el objetivo de la cámara (hacia dónde mira)
      controlsRef.current.target.lerp(targetLookAt, 0.05);

      // Asegurarse de actualizar los controles para aplicar la nueva posición y target
      controlsRef.current.update();

      // Verificar si la cámara llegó cerca del objetivo
      if (camera.position.distanceTo(targetPosition) < 0.01) {
        camera.position.copy(targetPosition);
        controlsRef.current.target.copy(targetLookAt);
        controlsRef.current.update();
      }
    }
  });

  return <OrbitControls ref={controlsRef} />;
};

export default CameraController;
