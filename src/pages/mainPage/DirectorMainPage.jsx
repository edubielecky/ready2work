import React from 'react';
import { Link } from 'react-router-dom';


// Hook para o efeito de brilho no mouse
const useMouseGlow = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x-local', `${x}px`);
    card.style.setProperty('--mouse-y-local', `${y}px`);
  };
  return { onMouseMove: handleMouseMove };
};

const DirectorMainPage = () => {
  const glowHandlers = useMouseGlow();

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-2">Painel Executivo</h1>
        <p className="fs-5 text-light opacity-75">Visão estratégica e consolidada da organização.</p>
      </div>

      <div className="row g-4 gx-lg-5 justify-content-center">
        <div className="col-lg-10">
          <div className="d-flex flex-column gap-4">
            {/* Card para o Dashboard Executivo */}
            <Link to="/executive-dashboard" className="glass-card summary-card" style={{'--card-index': 1}} {...glowHandlers}>
              <span className="card-icon">📈</span>
              <h3 className='fs-4'>Dashboard Executivo</h3>
              <p className="text-light opacity-75 mb-2">Acompanhe os KPIs globais, metas e resultados da empresa.</p>
              <span className="card-link">Acessar Dashboard &rarr;</span>
            </Link>

            {/* Card para Visão Geral das Equipes */}
            <Link to="/teams-overview" className="glass-card summary-card" style={{'--card-index': 2}} {...glowHandlers}>
              <span className="card-icon">🏢</span>
              <h3 className='fs-4'>Visão Geral das Equipes</h3>
              <p className="text-light opacity-75 mb-2">Analise a performance, alocação e desenvolvimento dos times.</p>
              <span className="card-link">Ver Equipes &rarr;</span>
            </Link>

            {/* Card para Relatórios */}
            <Link to="/global-reports" className="glass-card summary-card" style={{'--card-index': 3}} {...glowHandlers}>
              <span className="card-icon">📄</span>
              <h3 className='fs-4'>Relatórios Globais</h3>
              <p className="text-light opacity-75 mb-2">Gere e visualize relatórios consolidados de performance e talentos.</p>
              <span className="card-link">Ver Relatórios &rarr;</span>
            </Link>

             {/* Card para Meu Perfil */}
             <Link to="/profile" className="glass-card summary-card" style={{'--card-index': 4}} {...glowHandlers}>
              <span className="card-icon">👤</span>
              <h3 className='fs-4'>Meu Perfil</h3>
              <p className="text-light opacity-75 mb-2">Edite suas informações pessoais e configurações.</p>
              <span className="card-link">Acessar Perfil &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DirectorMainPage;
