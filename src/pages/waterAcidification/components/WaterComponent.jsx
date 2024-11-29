import React, { useRef, useState, useEffect } from "react";
import { Sky, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Html, Environment } from "@react-three/drei";
import AnimationRain from "./animationRain";

const WaterComponent = (props) => {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [isLeft, setIsLeft] = useState(false);
    const [rotationSpeed, setRotationSpeed] = useState(0);
    const properties = useGLTF('models-3d/pollution.glb');

    console.log(properties);

    const info = {
        inicial: {
            titulo: "La lluvia constante de mi isla",
            descripcion:
                "Crecí en una isla donde la lluvia nunca cesaba. La humedad en el aire y las gotas cayendo sobre el suelo eran parte de mi vida diaria. El agua, que siempre había sido mi compañera, empezó a volverse diferente. Lo que antes era un símbolo de la naturaleza pura, empezó a cambiar. En lugar de refrescar el aire, comenzó a traer consigo un ácido extraño, que afectaba a todo lo que tocaba. Yo no sabía qué estaba pasando, pero sabía que algo no estaba bien.",
            sensibilizacion:
                "Ahora, al ver cómo la lluvia cae desde aquí, en este país lejano, siento una gran tristeza. Ya no es la lluvia que conocía, no es la misma lluvia que me hacía sentir conectado con mi hogar. La acidificación de los océanos afectó no solo a los mares, sino también a mi alma, cambiando para siempre la forma en que veo el agua."
        },
        segundo: {
            titulo: "La vida en el mar se desvaneció",
            descripcion:
                "Recuerdo cómo nadaba en el mar, rodeado de peces y corales. Las aguas eran claras y llenas de vida, un paraíso bajo el agua. Pero todo eso cambió. Los corales empezaron a desmoronarse, los peces dejaron de ser tan abundantes, y el agua que antes era refrescante ahora se volvió peligrosa. Mis amigos, los pescadores, ya no podían encontrar suficiente comida. Las olas ya no traían la misma alegría; traían tristeza, porque la vida se había ido.",
            sensibilizacion:
                "Hoy, en mi nuevo hogar, miro las aguas de los océanos con nostalgia. La acidificación del agua mató la vida marina que tanto amaba. La belleza que una vez compartí con el mar, ahora es solo un recuerdo doloroso de lo que perdí."
        },
        tercero: {
            titulo: "Las razones de mi partida",
            descripcion:
                "Durante años no entendí qué estaba pasando. Pensaba que la lluvia, el mar, todo era normal. Pero un día comprendí. La quema de combustibles fósiles, la contaminación, las malas prácticas humanas habían estado afectando al planeta sin que lo supiéramos. El CO2 de las fábricas, los autos, y los incendios forestales, habían llegado a los océanos, y ellos lo absorbieron. Fue entonces cuando entendí que mi isla ya no era habitable. La tierra ya no era un refugio seguro para mí ni para mis seres queridos.",
            sensibilizacion:
                "Ahora, al mirar hacia el futuro, sé que no puedo quedarme en el pasado. La gente tiene que tomar conciencia de cómo nuestras acciones afectan el mundo. Debemos reducir las emisiones, proteger la naturaleza, y cambiar nuestros hábitos antes de que todo lo que amamos se desvanezca como lo hizo mi hogar."
        },
        cuarto: {
            titulo: "El dolor de vivir lejos de mi isla",
            descripcion:
                "Al llegar a este nuevo país, sentí alivio por haber sobrevivido, pero el dolor no desapareció. Ahora, cada vez que la lluvia cae sobre mi nueva tierra, siento una tristeza profunda. La lluvia ya no trae recuerdos felices; me recuerda lo que perdí. La isla que tanto amaba, la isla que ya no puedo regresar a ver. Mi hogar está bajo el agua, invadido por la acidez de los océanos, y yo estoy aquí, viendo caer una lluvia que ya no tiene la misma frescura.",
            sensibilizacion:
                "La acidificación de los océanos no solo destruyó la vida marina, sino que también arrasó con mi vida. Nos afectó a todos, pero aquellos como yo, que tuvimos que abandonar nuestros hogares, sentimos su impacto más profundamente. Al final, todo lo que queda es un recordatorio de lo que solíamos ser, y lo que ahora somos: migrantes, buscando un nuevo hogar."
        }
    };


    const [index, setIndex] = useState(0);
    const tarjetas = Object.values(info);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % tarjetas.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + tarjetas.length) % tarjetas.length);
    };

    const handleButtonClick = () => {
        setIsDivVisible((prev) => !prev);
        setIsLeft(true);
    };

    const handleButtonClickDerecho = () => {
        setIsDivVisible((prev) => !prev);
        setIsLeft(false);
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

            <Html
                style={{ position: "absolute", bottom: "1px", right: "400px" }}
            >
                <div
                    style={{
                        position: "fixed",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        padding: "10px",
                        borderRadius: "5px",
                        background: "rgba(255, 255, 255, 0.8)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                        zIndex: 1000,
                        width: "250px",
                        fontSize: "18px",
                    }}
                >
                    <h3>Instrucciones</h3>
                    <p><strong>Nota como cambia el color de la tierra </strong> Da Click encima</p>
                    <p><strong>Rueda del ratón:</strong> Zoom in / Zoom out</p>
                    <p><strong>Tecla ↑:</strong> Aumentar velocidad de rotación</p>
                    <p><strong>Tecla ↓:</strong> Reducir velocidad de rotación</p>
                </div>
            </Html>

            <Html position={[8, 4, 0]} center>
                <button
                    style={{
                        fontSize: "1.5rem",
                        letterSpacing: "2px",
                        fontFamily: "Wix Madefor Text",
                        fontWeight: "bold",
                        padding: "0.5rem 2rem",
                        borderRadius: "15px",
                        border: "2px solid #6E4D41",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        color: "#6E4D41",
                        cursor: "pointer",
                        outline: "none",
                        transition: "all 0.3s ease",
                    }}
                    onClick={handleButtonClick}
                >
                    ¡Habla con Piolo!
                </button>
            </Html>

            <Sky
                distance={1000}
                sunPosition={[0, 1, 0]}
                inclination={0.3}
                azimuth={0.25}
                turbidity={10}
                rayleigh={2}
                mieCoefficient={0.005}
                mieDirectionalG={0.8}
                skyColor={0x1d1d1d}  // Cielo oscuro
                atmosphereColor={0x1d1d1d}  // Atmósfera más oscura
            />

            <Html position={[0, 0, 0]} center>
                <div
                    style={{
                        display: isDivVisible ? "flex" : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        width: "50vw",
                        maxHeight: "80vh",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "1rem",
                        borderRadius: "10px",
                        overflow: "auto",
                    }}
                >
                    <button
                        onClick={() => setIsDivVisible(false)} // Cierra la ventana
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "none",
                            border: "none",
                            fontSize: "1.5rem",
                            color: "#6E4D41",
                            cursor: "pointer",
                            fontWeight: "bold",
                            padding: "0.5rem",
                            zIndex: 1000,
                        }}
                    >
                        X
                    </button>
                    <div
                        style={{
                            color: "black",
                            fontSize: "1rem",
                            fontFamily: "Wix Madefor Text",
                            lineHeight: "1.6",
                        }}
                    >
                        <h2
                            style={{
                                color: "#6E4D41",
                                fontSize: "1.5rem",
                                marginBottom: "0.5rem",
                                fontFamily: "Wix Madefor Text",
                                textAlign: "center",
                            }}
                        >
                            {tarjetas[index].titulo}
                        </h2>
                        <p>{tarjetas[index].descripcion}</p>
                        <p>
                            <strong>Sensibilización:</strong> {tarjetas[index].sensibilizacion}
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button onClick={handlePrev} style={buttonStyle}>
                                Anterior
                            </button>
                            <button onClick={handleNext} style={buttonStyle}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </Html>

            {/* Luz puntual para iluminar un área específica */}
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <group ref={groupRef} {...props} dispose={null} castShadow tabIndex={0} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 25, 0]}>
                <AnimationRain />
            </group>
        </>
    );
};

const buttonStyle = {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "2px solid #6E4D41",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#6E4D41",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
    marginTop: "1rem",
};

export default WaterComponent;
useGLTF.preload('models-3d/pollution.glb');
