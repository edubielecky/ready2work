import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container text-center mt-5 text-white">
      <h1 className="display-3 fw-bold mb-4">Bem-vindo ao Ready2Work</h1>
      <p className="fs-4 mb-5">
        Conectando habilidades, transformando carreiras e potencializando o crescimento interno.
      </p>
      
      <div className="d-flex justify-content-center gap-3">
        {/* Botão principal chamando para ação (pode levar ao login ou cadastro futuro) */}
        <Link to="/login" className="btn btn-primary btn-lg px-5">
          Começar Agora
        </Link>
        
        <button className="btn btn-outline-light btn-lg px-5">
          Saiba Mais
        </button>
      </div>
      
      <div className="mt-5 glass-card p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="h4">Por que usar o Ready2Work?</h2>
        <p className="opacity-75">
          Gui negão gui negão gui negão gui negão gui negão gui negão gui negão gui negão gui negão
        </p>
      </div>
    </div>
  );
};

export default LandingPage;