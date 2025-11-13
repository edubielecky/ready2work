import React from 'react';
import { Link } from 'react-router-dom';
import './mainPage.css'; // Importa o novo CSS

// Um Hook customizado para o efeito de brilho que segue o mouse dentro de um elemento
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

const MainPage = () => {
  const glowHandlers = useMouseGlow();

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Bem-vindo, Gestor</h1>
        <p className="fs-5 text-light opacity-75">Acesse rapidamente as principais áreas do seu painel.</p>
      </div>

      <div className="row g-4 gx-lg-5">
        {/* Coluna Principal (Navegação) */}
        <div className="col-lg-7">
          <div className="d-flex flex-column gap-4">
            {/* Card para o Dashboard */}
            <Link to="/dashboard" className="glass-card summary-card" style={{'--card-index': 1}} {...glowHandlers}>
              <span className="card-icon">📊</span>
              <h3>Dashboard</h3>
              <p className="text-light opacity-75">Visão geral da equipe, aprovações e vagas em aberto.</p>
              <span className="card-link">Acessar Dashboard &rarr;</span>
            </Link>

            {/* Card para Minha Equipe */}
            <Link to="/team" className="glass-card summary-card" style={{'--card-index': 2}} {...glowHandlers}>
              <span className="card-icon">👥</span>
              <h3>Minha Equipe</h3>
              <p className="text-light opacity-75">Gerencie os membros da sua equipe, performance e competências.</p>
              <span className="card-link">Gerenciar Equipe &rarr;</span>
            </Link>

            {/* Card para Meu Perfil */}
            <Link to="/profile" className="glass-card summary-card" style={{'--card-index': 3}} {...glowHandlers}>
              <span className="card-icon">👤</span>
              <h3>Meu Perfil</h3>
              <p className="text-light opacity-75">Edite suas informações pessoais e configurações da conta.</p>
              <span className="card-link">Ver Perfil &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Coluna Lateral (Widgets) */}
        <div className="col-lg-5">
          <div className="d-flex flex-column gap-4">
            {/* Widget de Performance */}
            <div className="glass-card widget-card p-4" style={{'--card-index': 4}}>
              <h4>Resumo de Performance</h4>
              <div className="bar-chart-container">
                <div className="bar-wrapper">
                  <span className="bar-value">12%</span>
                  <div className="bar" style={{ height: '12%', '--delay-index': 1 }}></div>
                  <span className="bar-label">Abaixo</span>
                </div>
                <div className="bar-wrapper">
                  <span className="bar-value">58%</span>
                  <div className="bar" style={{ height: '58%', '--delay-index': 2 }}></div>
                  <span className="bar-label">Na Média</span>
                </div>
                <div className="bar-wrapper">
                  <span className="bar-value">30%</span>
                  <div className="bar" style={{ height: '30%', '--delay-index': 3 }}></div>
                  <span className="bar-label">Acima</span>
                </div>
                <div className="bar-wrapper">
                  <span className="bar-value">10%</span>
                  <div className="bar" style={{ height: '10%', '--delay-index': 4 }}></div>
                  <span className="bar-label">Excelente</span>
                </div>
              </div>
            </div>

            {/* Widget de Projetos */}
            <div className="glass-card widget-card p-4" style={{'--card-index': 5}}>
              <h4>Status dos Projetos</h4>
              <div className="donut-chart-container" style={{'--p1': 70, '--p2': 70 + 20, '--p3': 70 + 20 + 10}}>
                <div className="center-text">
                  <span>10</span>
                  <small className='d-block opacity-75'>Total</small>
                </div>
              </div>
              <ul className="chart-legend">
                <li>
                  <span style={{width: '10px', height: '10px', backgroundColor: '#198754', borderRadius: '50%'}}></span> Concluído
                </li>
                <li>
                  <span style={{width: '10px', height: '10px', backgroundColor: '#ffc107', borderRadius: '50%'}}></span> Em Andamento
                </li>
                <li><span style={{width: '10px', height: '10px', backgroundColor: '#dc3545', borderRadius: '50%'}}></span> Atrasado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;