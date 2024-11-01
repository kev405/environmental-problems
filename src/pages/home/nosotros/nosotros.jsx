// src/pages/home/nosotros/nosotros.jsx
import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <div className="nosotros-container background"> {/* Añade la clase "background" */}
            <h1 className="nosotros-title">SOBRE NOSOTROS</h1>
            <section className="nosotros-section">
                <h2>Nuestra Misión</h2>
                <p>Nuestra misión es crear conciencia sobre los problemas medioambientales y educar a las personas sobre el cuidado del agua.</p>
            </section>
            <section className="nosotros-section">
                <h2>Equipo</h2>
                <p>Somos un equipo de estudiantes apasionados por el medio ambiente y la tecnología.</p>
            </section>
            <section className="nosotros-section">
                <h2>Nuestra Historia</h2>
                <p>Este proyecto fue creado con el propósito de ayudar a la comunidad a comprender la importancia del agua y su conservación.</p>
            </section>
        </div>
    );
};

export default Nosotros;
