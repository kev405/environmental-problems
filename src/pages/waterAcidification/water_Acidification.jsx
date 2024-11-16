import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import WaterComponent from "./components/WaterComponent";
import "./water_Acidification.css"

const Water_Acidification = () => {
    return (
        <>
            <div className="home-control">
                <div className="home-container">
                    <Canvas className="canvas-3d" camera={{ position: [-2, 3, 7], fov:4 }}>
                        <WaterComponent />
                        <OrbitControls enableZoom={false} />
                        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                    </Canvas>
                </div>
            </div>
        </>
    );
};

export default Water_Acidification;