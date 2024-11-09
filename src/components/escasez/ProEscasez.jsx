import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Escasez from "./Escasez";

export const ProEscasez = () => {
    return (
        <>
            <div style={{
                display: "flex",              // Usamos flexbox
                justifyContent: "center",    // Centramos el contenido horizontalmente
                alignItems: "center",        // Centramos el contenido verticalmente
                height: "100vh",              // Ocupa toda la altura de la ventana
                width: "100%",                // Ocupa todo el ancho
            }}>
                <div style={{
                    height: "50vh",            // El contenedor del Canvas ocupa la mitad de la altura
                    width: "50vw",             // El contenedor del Canvas ocupa la mitad del ancho
                }}>
                    <Canvas>
                        {/* Luz ambiental básica */}
                        <ambientLight intensity={0.9} />
                        {/* Luz direccional para iluminar desde un ángulo específico */}
                        <directionalLight position={[10, 10, 10]} intensity={5} />
                        <Escasez />
                        <OrbitControls />
                    </Canvas>
                </div>
            </div>
        </>
    );
};

export default ProEscasez;
