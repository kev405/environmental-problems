import React, { useRef, useState, useEffect } from "react";
import { Sky, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const waterComponent = (props) => {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [rotationSpeed, setRotationSpeed] = useState(0);
    const { nodes, materials, animations } = useGLTF('models-3d/pollution.glb');

    const properties = useGLTF('models-3d/pollution.glb');

    console.log(properties);

    const info = {
        inicial: {
            titulo: "Acidificación del agua",
            descripcion:
                "La acidificación de los océanos es un proceso causado por la absorción de CO2 en el agua, lo cual reduce su pH y afecta negativamente a los ecosistemas marinos.",
            sensibilizacion:
                "Reducir las emisiones de CO2 es esencial para proteger la biodiversidad marina y mantener el equilibrio de los océanos.",
        },
        segundo: {
            titulo: "Impacto en la vida marina",
            descripcion:
                "La acidificación afecta a los organismos calcificadores, como corales y moluscos, dificultando la formación de sus conchas y esqueletos de carbonato de calcio.",
            sensibilizacion:
                "Es fundamental proteger los hábitats marinos vulnerables para garantizar la supervivencia de especies clave en el ecosistema oceánico.",
        },
        tercero: {
            titulo: "Causas principales",
            descripcion:
                "La quema de combustibles fósiles, la deforestación y las prácticas agrícolas generan grandes cantidades de CO2, que terminan siendo absorbidas por los océanos.",
            sensibilizacion:
                "Adoptar fuentes de energía renovable y reducir la huella de carbono son pasos cruciales para combatir la acidificación de los océanos.",
        },
        cuarto: {
            titulo: "Consecuencias económicas",
            descripcion:
                "La disminución de poblaciones de peces y mariscos debido a la acidificación afecta la seguridad alimentaria y los ingresos de comunidades pesqueras.",
            sensibilizacion:
                "Promover prácticas sostenibles y apoyar a las comunidades pesqueras puede mitigar los impactos económicos de este fenómeno.",
        },
    };

    const [index, setIndex] = useState(0);
    const tarjetas = Object.values(info);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % tarjetas.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + tarjetas.length) % tarjetas.length);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowUp") {
                setRotationSpeed((prevSpeed) => prevSpeed + 0.001); // Aumentar velocidad de rotación
                console.log("Aumentar velocidad");
            }
            if (event.key === "ArrowDown") {
                setRotationSpeed((prevSpeed) => Math.max(prevSpeed - 0.001, 0)); // Reducir velocidad de rotación
                console.log("Reducir velocidad");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown); // Limpiar evento
        };
    }, []);

    // Rotación automática
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += rotationSpeed; // Ajusta la velocidad de rotación
        }
    });

    return (
        <>
            {/* Luz ambiental para iluminar toda la escena */}
            <ambientLight intensity={0.4} />

            {/* Luz direccional para sombras */}
            <directionalLight
                castShadow
                position={[5, 10, 5]} // Posición de la luz
                intensity={2} // Intensidad de la luz
                shadow-mapSize-width={1024} // Tamaño del mapa de sombras
                shadow-mapSize-height={1024}
                shadow-camera-far={50} // Distancia de la cámara de sombras
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            <Sky
                sunPosition={[0, 0.08, -1]}
                inclination={0.1}
                azimuth={30}
                mieCoefficient={0.005}
                elevation={10}
                mieDirectionalG={0.8}
                rayleigh={8}
                turbidity={2}
                exposure={0.5}
                scale={4}
            />

            <Html
                style={{ position: "absolute", bottom: "1px", right: "400px" }}>
                <div style={{
                    position: "fixed",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "10px",
                    borderRadius: "5px",
                    background: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    zIndex: 1000,
                    width: "250px",
                    fontSize: "18px"
                }}>

                    <h3>Instrucciones</h3>
                    <p><strong>Nota como cambia el color de la tierra </strong> Da Click encima</p>
                    <p><strong>Rueda del ratón:</strong> Zoom in / Zoom out</p>
                    <p><strong>Tecla ↑:</strong> Aumentar velocidad de rotación</p>
                    <p><strong>Tecla ↓:</strong> Reducir velocidad de rotación</p>
                </div>
            </Html>

            <Html
                style={{ position: "absolute", top: "40px", left: "10px" }}>
                <div style={{
                    position: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "10px",
                    borderRadius: "5px",
                    top: "0px",
                    background: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    zIndex: 1000,
                    width: "300px",
                    fontSize: "16px",
                }}>
                    <h3>{tarjetas[index].titulo}</h3>
                    <p>{tarjetas[index].descripcion}</p>
                    <p><strong>Sensibilización:</strong> {tarjetas[index].sensibilizacion}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                        <button onClick={handlePrev} style={{ padding: "5px 10px" }}>Anterior</button>
                        <button onClick={handleNext} style={{ padding: "5px 10px" }}>Siguiente</button>
                    </div>
                </div>
            </Html>

            {/* Luz puntual para iluminar un área específica */}
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <group ref={groupRef} {...props} dispose={null} castShadow tabIndex={0} position={[0, 0, 0]}
                scale={[0.0001, 0.0001, 0.0001]} rotation={[0, 80, 0]}>

                <Html
                    center
                    distanceFactor={1}
                    transform
                    style={{
                        fontSize: "20pt"
                    }}>
                    <div style={{ color: "black ", padding: "10px", borderRadius: "5px" }}>
                        <h1>Ciclo del Agua</h1>
                    </div>
                </Html>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.bottle_of_water}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.cans_of_coke}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.closed_barrels}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.crate}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.lambert1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.open_barresls}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.pipes}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.radioactive_plants}
                />
            </group>
        </>
    );
};

export default waterComponent;
useGLTF.preload('models-3d/pollution.glb');
