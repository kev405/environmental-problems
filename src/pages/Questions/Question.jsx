import "./Question.css";
import { useState, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ocean from "./components/Ocean";
import Fish1 from "./components/Fish1";
import Fish2 from "./components/Fish2";
import Fish3 from "./components/Fish3";
import Fish4 from "./components/Fish4";
import UserDAO from "../../daos/UserDAO";

const ProblemPollution = () => {
  const [questionVisible, setQuestionVisible] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const { loading, user } = useAuthStore();
  const [score, setScore] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const quiz = await UserDAO.getQuizStateByEmail(user.email);
        if (quiz) {
          setAnsweredQuestions(quiz.data.questions);
        }else{
            setAnsweredQuestions([]);
        }
        console.log(quiz);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [user.email]);


  useEffect(() => {
    const saveQuizState = async () => {
        await UserDAO.saveQuizState({
            email: user.email,
            questions: answeredQuestions,
        });

        await UserDAO.addScore({
            email: user.email,
            score: score,
        })
    };

    if (answeredQuestions.length > 0) {
        saveQuizState();
    }
}, [answeredQuestions]);

  const questions = {
    Fish1: {
      question: "¿Cuál es el recurso más importante para la vida en la Tierra?",
      options: ["Agua", "Petróleo", "Oro", "Carbón"],
      answer: "Agua",
    },
    Fish2: {
      question: "¿Qué causa la acidificación de los océanos?",
      options: ["Deforestación", "Aumento del CO2", "Deshielo polar", "Erosión del suelo"],
      answer: "Aumento del CO2",
    },
    Fish3: {
      question: "¿Cuál es el gas más abundante en la atmósfera?",
      options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
      answer: "Nitrógeno",
    },
    Fish4: {
      question: "¿Qué recurso natural es renovable?",
      options: ["Petróleo", "Carbón", "Energía solar", "Gas natural"],
      answer: "Energía solar",
    },
  };

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  const handleFishClick = (fishName) => {
    setSelectedFish(fishName);
    setQuestionVisible(true);
  };

  const handleAnswer = async (option) => {
    const correct = option === questions[selectedFish].answer;
    setAnsweredQuestions((prev) => [...prev, { fish: selectedFish, correct }]);
    setQuestionVisible(false);

    if (correct) {
      setScore((prev) => prev + 1);
    }
};




  const handleClosePopup = () => {
    setQuestionVisible(false);
  };

  const hasAnswered = (fishName) => {
    return answeredQuestions.some((q) => q.fish === fishName);
  };

  return (
    <>
      <Canvas camera={{ position: [12, 5, 1], fov: 120 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} gl={{ antialias: true }}>
        <directionalLight position={[1, 1, 1]} intensity={1} castShadow />
        <OrbitControls enableZoom={false} />

        <Fish1 name="Fish1" initialPosition={[-15, 3, 4]} castShadow onClick={() => handleFishClick("Fish1")} />
        <Fish2 name="Fish2" initialPosition={[0, 0, -10]} castShadow onClick={() => handleFishClick("Fish2")} />
        <Fish3 name="Fish3" initialPosition={[15, 3, 4]} castShadow onClick={() => handleFishClick("Fish3")} />
        <Fish4 name="Fish4" initialPosition={[15, 3, 4]} castShadow onClick={() => handleFishClick("Fish4")} />

        <Ocean />
      </Canvas>

      {questionVisible && selectedFish && (
        <div className="quiz-popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>X</button>
            <div className="question-section">
              <h2>Pregunta sobre contaminación</h2>
              <p>{questions[selectedFish].question}</p>
              <div className="options">
                {hasAnswered(selectedFish) ? (
                  <p>Ya respondiste esta pregunta</p>
                ) : (
                  questions[selectedFish].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                      {option}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProblemPollution;