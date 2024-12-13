import "./Question.css";
import { useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ocean from "./components/Ocean";
import Fish1 from "./components/Fish1";
import Fish2 from "./components/Fish2";
import Fish3 from "./components/Fish3";
import Fish4 from "./components/Fish4";

const ProblemPollution = () => {
    const [questionVisible, setQuestionVisible] = useState(false);
    const [selectedFish, setSelectedFish] = useState(null);
    const [puntaje, setPuntaje] = useState(null);
    const { loading, user } = useAuthStore();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            question: "¿Cuál es el recurso más importante para la vida en la Tierra?",
            options: ["Agua", "Petróleo", "Oro", "Carbón"],
            answer: "Agua",
        },
        {
            question: "¿Qué causa la acidificación de los océanos?",
            options: [
                "Deforestación",
                "Aumento del CO2",
                "Deshielo polar",
                "Erosión del suelo",
            ],
            answer: "Aumento del CO2",
        },
    ];


    if (loading) {
        return <p className="loading-text">Cargando...</p>;
    }

    // Función para manejar el puntaje
    const manejarPuntaje = async () => {
        const score = await obtenerPuntaje(user.email);
        if (score !== null) {
            setPuntaje(score);
        }
    };

    const enviarNuevoPuntaje = async () => {
        await enviarPuntaje(user.email, 4);
        manejarPuntaje();
    };

    const scoreUser = () => {
        console.log("Puntaje: ", puntaje);
    };

    // Función para manejar el clic en los peces
    const handleFishClick = (fishName) => {
        setSelectedFish(fishName);
        setQuestionVisible(true); // Muestra la ventana con la pregunta
    };

    const handleClosePopup = () => {
        setQuestionVisible(false);
    };

    return (
        <>
            <Canvas camera={{ position: [12, 5, 1], fov: 120 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} gl={{ antialias: true }}>
                <directionalLight position={[1, 1, 1]} intensity={1} castShadow />
                <OrbitControls enableZoom={false} />

                {/* Peces con onClick para manejar la interacción */}
                <Fish1 name="Fish1" initialPosition={[-15, 3, 4]} castShadow onClick={() => handleFishClick("Fish1")} />
                <Fish2 name="Fish2" initialPosition={[0, 0, -10]} castShadow onClick={() => handleFishClick("Fish2")} />
                <Fish3 name="Fish3" initialPosition={[15, 3, 4]} castShadow onClick={() => handleFishClick("Fish3")} />
                <Fish4 name="Fish4" initialPosition={[15, 3, 4]} castShadow onClick={() => handleFishClick("Fish4")} />

                <Ocean />
            </Canvas>

            {questionVisible && (
                <div className="quiz-popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={handleClosePopup}>X</button>
                        <div className="question-section">
                            <h2>Pregunta sobre contaminación</h2>
                            <p>¿Cuál es el impacto de la contaminación en los océanos?</p>
                            <div className="options">
                                <button onClick={() => alert("Respuesta correcta")}>Opción 1</button>
                                <button onClick={() => alert("Respuesta incorrecta")}>Opción 2</button>
                                <button onClick={() => alert("Respuesta incorrecta")}>Opción 3</button>
                                <button onClick={() => alert("Respuesta incorrecta")}>Opción 4</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProblemPollution;
