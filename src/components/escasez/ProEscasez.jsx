/* eslint-disable react/no-unknown-property */
import React, { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import Escasez from "./Escasez";

const controls = {
  left: "left",
  right: "right",
};

export const ProEscasez = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [rotationY, setRotationY] = useState(0); // Estado para controlar la rotación

  // Mapeo de teclas
  const map = useMemo(
    () => [
      { name: controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  const handleKeyChange = (name, pressed) => {
    if (name === controls.left && pressed) {
      rotateLeft();
    }
    if (name === controls.right && pressed) {
      rotateRight();
    }
  };

  const rotateLeft = () => setRotationY((prev) => prev - 0.05); // Ajuste de rotación a la izquierda
  const rotateRight = () => setRotationY((prev) => prev + 0.05); // Ajuste de rotación a la derecha

  useEffect(() => {
    const handleKeyDown = (event) => {
      map.forEach((control) => {
        if (control.keys.includes(event.code)) {
          handleKeyChange(control.name, true);
        }
      });
    };

    const handleKeyUp = (event) => {
      map.forEach((control) => {
        if (control.keys.includes(event.code)) {
          handleKeyChange(control.name, false);
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [map]);

  const handleButtonClick = () => {
    setIsDivVisible((prev) => !prev);
    setIsLeft(true);
  };

  const handleButtonClickDerecho = () => {
    setIsDivVisible((prev) => !prev);
    setIsLeft(false);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 5, 15] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={5} />

        <group rotation-y={rotationY}>
          <Escasez />
        </group>

        <Html position={[0, 8, 0]} center>
          <h1
            style={{
              color: "#406D66",
              letterSpacing: "2px",
              fontFamily: "Anton",
              fontSize: "3rem",
              textAlign: "center",
              whiteSpace: "nowrap",
              WebkitTextStroke: "1px #bbb",
            }}
          >
            ESCASEZ DEL AGUA
          </h1>
        </Html>

        <Html position={[-10, 7, 0]} center>
          <button
            style={{
              fontSize: "1.5rem",
              letterSpacing: "2px",
              fontFamily: "Wix Madefor Text",
              fontWeight: "bold",
              padding: "0.5rem 2rem",
              borderRadius: "15px",
              border: "2px solid #406D66",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              color: "#406D66",
              cursor: "pointer",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onClick={handleButtonClick}
          >
            Introducción
          </button>
        </Html>

        <Html position={[10, 7, 0]} center>
          <button
            style={{
              fontSize: "1.5rem",
              letterSpacing: "2px",
              fontFamily: "Wix Madefor Text",
              fontWeight: "bold",
              padding: "0.5rem 2rem",
              borderRadius: "15px",
              border: "2px solid #406D66",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              color: "#406D66",
              cursor: "pointer",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onClick={handleButtonClickDerecho}
          >
            Sensibilización
          </button>
        </Html>

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
            <div
              style={{
                color: "black",
                fontSize: "1rem",
                fontFamily: "Wix Madefor Text",
                lineHeight: "1.6",
              }}
            >
              {isLeft ? (
                <div>
                  <h2
                    style={{
                      color: "#406D66",
                      fontSize: "1.5rem",
                      marginBottom: "0.5rem",
                      fontFamily: "Wix Madefor Text",
                      textAlign: "center",
                    }}
                  >
                    Introducción a la escasez del agua
                  </h2>
                  <p>
                    La escasez de agua es un problema global crítico que afecta
                    a millones de personas y a los ecosistemas en todo el
                    planeta. Aunque el agua cubre aproximadamente el 71% de la
                    superficie terrestre, solo el 2.5% es agua dulce, y de esa
                    pequeña fracción, una gran parte está atrapada en glaciares
                    y capas de hielo. Esto significa que solo alrededor del 1%
                    de toda el agua está disponible para consumo humano,
                    agrícola e industrial.
                  </p>
                  <p>
                    <strong>Causas de la escasez de agua:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Cambio climático:</strong> El aumento de las
                      temperaturas y las variaciones en los patrones de
                      precipitación están causando sequías en algunas regiones y
                      excesivas lluvias en otras, lo que afecta la
                      disponibilidad de agua.
                    </li>
                    <li>
                      <strong>Crecimiento de la población:</strong> El
                      incremento de la población mundial eleva la demanda de
                      agua potable y de agua para la agricultura, que es
                      esencial para alimentar a la humanidad.
                    </li>
                    <li>
                      <strong>Contaminación del agua:</strong> La contaminación
                      reduce la cantidad de agua potable disponible, ya que
                      ríos, lagos y acuíferos se ven afectados por residuos
                      industriales, plásticos y desechos agrícolas.
                    </li>
                    <li>
                      <strong>Uso ineficiente del agua:</strong> La falta de
                      prácticas sostenibles en la agricultura y la industria
                      provoca un consumo excesivo y un desperdicio del recurso.
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <h2
                    style={{
                      color: "#406D66",
                      fontSize: "1.5rem",
                      marginBottom: "0.5rem",
                      fontFamily: "Wix Madefor Text",
                      textAlign: "center",
                    }}
                  >
                    Sensibilización sobre la escasez del agua
                  </h2>
                  <p>
                    La escasez de agua no solo afecta a las personas que viven
                    en áreas áridas; es un problema que tiene consecuencias
                    globales. Muchas personas no se dan cuenta de cómo sus
                    acciones diarias pueden contribuir a este problema o ayudar
                    a aliviarlo. Crear conciencia sobre el uso responsable del
                    agua es fundamental para asegurar su disponibilidad en el
                    futuro.
                  </p>
                  <p>
                    <strong>Aspectos clave para sensibilizar:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Uso responsable en el hogar:</strong> Los
                      individuos pueden reducir su consumo mediante prácticas
                      como cerrar el grifo mientras se cepillan los dientes,
                      tomar duchas más cortas y reparar fugas.
                    </li>
                    <li>
                      <strong>Educación en comunidades:</strong> La educación y
                      la sensibilización en comunidades sobre la importancia de
                      la conservación del agua pueden inspirar a más personas a
                      adoptar prácticas sostenibles.
                    </li>
                    <li>
                      <strong>Impacto en ecosistemas:</strong> La escasez de
                      agua afecta la biodiversidad, dañando los hábitats
                      naturales y amenazando a muchas especies. Es importante
                      entender que proteger el agua también es proteger la vida.
                    </li>
                    <li>
                      <strong>Rol de la industria y agricultura:</strong> Las
                      empresas y agricultores deben ser conscientes de su uso de
                      agua y adoptar tecnologías que reduzcan el desperdicio y
                      la contaminación.
                    </li>
                  </ul>
                  <p>
                    <em>Reflexión:</em> "El agua es un recurso finito, y nuestra
                    supervivencia depende de cómo la usemos hoy."
                  </p>
                </div>
              )}
            </div>
          </div>
        </Html>

        <OrbitControls enablePan={true} enableZoom={true} />

        <Environment
          files="/cubemap/tierra-hdr/dry_cracked_lake_2k.hdr"
          background={true}
        />
      </Canvas>
    </div>
  );
};

export default ProEscasez;
