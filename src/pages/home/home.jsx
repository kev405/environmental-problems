import React, { useRef } from 'react';
import './Home.css'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sky from "../../components/Sky.jsx";
import Turttle from "../../models-jsx/Login/Turttle";
import Turttle2 from "../../models-jsx/Login/Turttle2";
import { Link } from 'react-router-dom';


const RotatingCamera = () => {
    const cameraRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        // Rota la cámara horizontalmente alrededor del eje Y
        if (cameraRef.current) {
            cameraRef.current.position.x = Math.sin(elapsedTime) * 3; // Ajusta el radio de rotación
            cameraRef.current.position.z = Math.cos(elapsedTime) * 3; // Ajusta el radio de rotación
            cameraRef.current.position.y = 2; // Mantiene la altura de la cámara
        }
    });

    return <perspectiveCamera ref={cameraRef} position={[3, 2, 5]} />;
};

const Home = () => {
    return (
        <div className="home-container">
            <Canvas className="island-canvas">
                <Turttle position={[-15, 8, 2]} />
                <Turttle2 position={[-15, 5, 1]} />
                <RotatingCamera />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                />
                <Sky
                    sunPosition={[0, 0, -1]}
                    inclination={0.2}
                    azimuth={50}
                    mieCoefficient={0.005}
                    elevation={50}
                    mieDirectionalG={0.07}
                    rayleigh={3}
                    turbidity={0}
                    exposure={1}
                />
            </Canvas>

            <div className="menu-container">
                <h1 className="menu-title">MENÚ</h1>
                <Link to="/nosotros" className="menu-link">
                    <button className="menu-button">SOBRE NOSOTROS</button>
                </Link>
                <button className="menu-button">PROBLEMAS AMBIENTALES DEL AGUA</button>
                <button className="menu-button">EXPERIENCIAS INTERACTIVAS 3D</button>
                <button className="menu-button">RECURSOS EDUCATIVOS</button>
                <button className="menu-button">PARTICIPA</button>
            </div>
        </div>
    );
};

export default Home;