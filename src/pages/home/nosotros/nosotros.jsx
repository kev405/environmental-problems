import React from "react";
import "./Nosotros.css";
import { Text, Text3D } from "@react-three/drei";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {" "}
      {/* Mantén solo la clase de contenedor */}
      <h1 className="nosotros-title">SOBRE NOSOTROS</h1>
      <section className="nosotros-section">
        <h2>NUESTRA MISIÓN</h2>
        <p>
          En Univallenitas, nuestra misión es generar conciencia sobre los
          problemas medioambientales más urgentes, con un enfoque particular en
          la conservación del agua. Buscamos educar a las personas sobre la
          importancia de este recurso vital, inspirando acciones concretas para
          su preservación.
        </p>
      </section>
      <section className="nosotros-section">
        <h2>EQUIPO</h2>
        <p>
          Somos un equipo de estudiantes de la Universidad del Valle, unidos por
          nuestra pasión por el medio ambiente y la tecnología. Nos motiva crear
          soluciones innovadoras que no solo informen, sino que también
          impliquen a los usuarios en el proceso educativo a través de
          experiencias inmersivas y accesibles.
        </p>
      </section>
      <section className="nosotros-section">
        <h2>NUESTRA HISTORIA</h2>
        <p>
          Este proyecto nació con el propósito de ayudar a la comunidad a
          comprender la magnitud de los problemas relacionados con el agua, así
          como la urgencia de su conservación. A través de nuestra plataforma,
          queremos ofrecer una herramienta educativa que impulse a las personas
          a ser parte activa de la solución.
        </p>
      </section>
    </div>
  );
};

export default Nosotros;
