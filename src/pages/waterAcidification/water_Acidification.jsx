import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WaterComponent from "./components/WaterComponent";
import { Physics, useBox, useSphere } from '@react-three/cannon';

const RainDrop = ({ position, onCollision, removeDrop, color }) => {
    const [ref] = useSphere(() => ({
        mass: 1,
        position,
        args: [0.05], // tamaño de la esfera
    }));

    const handleCollision = (e) => {
        if (e.contact && e.contact.body) {
            onCollision(position); // Llamar a la función de colisión
            removeDrop(); // Eliminar la gota de lluvia cuando toca el suelo
        }
    };

    useEffect(() => {
        const currentRef = ref.current;
        currentRef.addEventListener('collide', handleCollision);
        return () => {
            currentRef.removeEventListener('collide', handleCollision);
        };
    }, [position]);

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <sphereGeometry args={[0.05, 32, 32]} />
            <meshStandardMaterial
                color={color} // Usar el color pasado como prop
                transparent={true} 
                opacity={0.7} 
            />
        </mesh>
    );
};

const Ground = () => {
    const [ref] = useBox(() => ({
        args: [100, 1, 100], // el tamaño del suelo
        position: [0, -1, 0],
        receiveShadow: true,
    }));

    return (
        <mesh ref={ref} receiveShadow>
            <boxGeometry args={[100, 1, 100]} />
            <meshStandardMaterial color={0x000000} transparent={true} opacity={0} />
        </mesh>
    );
};

const Rain = ({ rainColor }) => {
    const [rainDrops, setRainDrops] = useState([]);
    const [fragments, setFragments] = useState([]);

    useEffect(() => {
        const dropInterval = setInterval(() => {
            // Cada 100ms, genera una nueva gota de lluvia
            setRainDrops((prev) => [
                ...prev,
                [Math.random() * 10 - 5, 5, Math.random() * 10 - 5], // randomize the position
            ]);
        }, 100);

        return () => clearInterval(dropInterval); // Limpiar interval cuando el componente se desmonte
    }, []);

    const handleCollision = (position) => {
        // Crear pequeñas partículas al colisionar
        const newFragments = [];
        for (let i = 0; i < 10; i++) {
            const fragmentPosition = [
                position[0] + (Math.random() - 0.5) * 0.1, // pequeñas variaciones
                position[1] - 0.1, // ajustamos la posición para que se vea disperso
                position[2] + (Math.random() - 0.5) * 0.1,
            ];
            newFragments.push(fragmentPosition);
        }
        setFragments((prev) => [...prev, ...newFragments]);
    };

    const removeDrop = () => {
        // Eliminar la gota después de colisionar
        setRainDrops((prev) => prev.slice(1)); // Eliminamos la primera gota (la más antigua)
    };

    return (
        <>
            {rainDrops.map((position, index) => (
                <RainDrop
                    key={index}
                    position={position}
                    onCollision={handleCollision}
                    removeDrop={removeDrop} // Pasar función de eliminación
                    color={rainColor} // Pasar el color de la lluvia
                />
            ))}
            {fragments.map((position, index) => (
                <mesh key={index} position={position} castShadow receiveShadow>
                    <sphereGeometry args={[0.02, 8, 8]} />
                    <meshStandardMaterial color="#CC6CE7" />
                </mesh>
            ))}
        </>
    );
};

const water_Acidification = () => {
    const [rainColor, setRainColor] = useState("#87CEEB"); // Color inicial azul

    // Función para cambiar el color de la lluvia
    const toggleRainColor = () => {
        setRainColor(rainColor === "#87CEEB" ? "#BF0CF0" : "#87CEEB");
    };

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            {/* Canvas que ocupa toda la pantalla */}
            <Canvas camera={{ position: [2, 5, 10], fov: 100 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <OrbitControls enableZoom={false} />
                <WaterComponent />
                <Physics>
                    <Ground />
                    <Rain rainColor={rainColor} />
                </Physics>
            </Canvas>

            {/* Botón flotante encima del canvas */}
            <button
                onClick={toggleRainColor}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    zIndex: 10, // Asegura que el botón esté por encima del canvas
                }}
            >
                Lluvia Ácida
            </button>
        </div>
    );
};

export default water_Acidification;
