// src/pages/home/nosotros/nosotros.jsx
import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <div className="nosotros-container"> {/* Mantén solo la clase de contenedor */}
            <h1 className="nosotros-title">SOBRE NOSOTROS</h1>
            <section className="nosotros-section">
                <h2>NUESTRA MISIÓN</h2>
                <p>Nuestra misión es crear conciencia sobre los problemas medioambientales y educar a las personas sobre el cuidado del agua.</p>
            </section>
            <section className="nosotros-section">
                <h2>EQUIPO</h2>
                <p>Somos un equipo de estudiantes apasionados por el medio ambiente y la tecnología.</p>
            </section>
            <section className="nosotros-section">
                <h2>NUESTRA HISTORIA</h2>
                <p>Este proyecto fue creado con el propósito de ayudar a la comunidad a comprender la importancia del agua y su conservación.</p>
            </section>
        </div>
    );
};

export default Nosotros;
