import "./Question.css";
import { useRef, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame  } from "@react-three/fiber";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import Ocean from "./components/Ocean";
import Fish1 from "./components/Fish1";
import Fish2 from "./components/Fish2";

const ProblemPollution = () => {
    const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(-9.445855186052283, 5.831885020952239, -3.950013148400385));
    const [targetLookAt, setTargetLookAt] = useState(new THREE.Vector3(-14.254039362526308, 2.686472104036879, -1.7887087400792328));
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [showHtml, setShowHtml] = useState(false);
    const [puntaje, setPuntaje] = useState(null);
    const controlsRef = useRef();

    // const moveCameraToNewTarget = () => {
    //   setTargetPosition(new THREE.Vector3(14.326031189977101, 14.303924841543708, 3.3270898092551917));
    //   setTargetLookAt(new THREE.Vector3(3.4122097168814642, 5.039213209879196, 12.4588383677463));
    // };

    const handleShowHtml = () => {
        setShowHtml(true);
    };

    const { loading, user } =
        useAuthStore();

    if (loading) {
        return <p className="loading-text">Cargando...</p>;
    }

    const manejarPuntaje = async () => {
        const score = await obtenerPuntaje(user.email);
        if (score !== null) {
            setPuntaje(score);
        }
    };

    const enviarNuevoPuntaje = async () => {
        await enviarPuntaje(user.email, 4);
        manejarPuntaje();
    }

    const scoreUser = () => {
        console.log("Puntaje: ", puntaje);
    };
    
    return (
        <>
            <Canvas camera={{ position: [12, 5, 1], fov: 120 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                gl={{ antialias: true }}>
                <directionalLight position={[1, 1, 1]} intensity={1} castShadow />
                <OrbitControls enableZoom={false} />
                <Fish1 initialPosition={[-15, 3, 4]} castShadow />
                <Fish2 initialPosition={[0, 0, -10]} castShadow />
                <Ocean />
            </Canvas>
        </>
    );
};

export default ProblemPollution;
