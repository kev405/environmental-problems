import React, { useRef, useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store.js";
import "./Home.css"; // Opcional: estilos personalizados
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sky from "../../components/Sky.jsx";
import Turttle from "../../models-jsx/Login/TurttleLogin.jsx";
import Turttle2 from "../../models-jsx/Login/TurttleLogin2.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserDAO from "../../daos/UserDAO.js";

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
  const navigate = useNavigate();
  const { setScores, setRewards } = useAuthStore();
  const {user} = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserDAO.getAllScores();
        const dataRewards = await UserDAO.getRewardById(user.email);
        const { rewards } = dataRewards.data;

        setRewards(rewards);
        setScores(data);

        // Maneja los datos aquí
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const { logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    console.log("Cerrando sesion");
    logout();
  }, [logout]);

  const handleClicked = () => {
    navigate("/water-pollution");
  };

  const handleClicked2 = () => {
    navigate("/escasez");
  };

  const handleClicked3 = () => {
    navigate("/water-acidification");
  };

  const handleClicked4 = () => {
    navigate("/table");
  };

  const handleClicked5 = () => {
    navigate("/rewards");
  }

  const handleClicked6 = () => {
    navigate("/quiz");
  }


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
        <button className="menu-button" onClick={handleClicked}>
          CONTAMINACION DEL AGUA
        </button>
        <button className="menu-button" onClick={handleClicked2}>
          ESCASEZ DE AGUA
        </button>
        <button className="menu-button" onClick={handleClicked3}>
          ACIDIFICACION DE LOS OCEANOS
        </button>
        <button className="menu-button">PARTICIPA</button>
        <button className="menu-button" onClick={handleClicked4}>
          PUNTUACIONES
        </button>
        <button className="menu-button" onClick={handleClicked5}>
          MIS RECOMPENSAS
        </button>
        <button className="menu-button" onClick={handleClicked6}>
          QUIZ
        </button>
        <button className="menu-button" onClick={handleLogout}>
          CERRAR SESION
        </button>
      </div>
    </div>
  );
};

export default Home;
