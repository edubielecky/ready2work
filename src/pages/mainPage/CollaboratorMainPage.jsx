import React from 'react';
import { Link } from 'react-router-dom';
import './CollaboratorMainPage.css'; // Usaremos um CSS específico
import { useMediaQuery } from "react-responsive";

// Hook de brilho do mouse (reutilizado da mainPage do gestor)
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

const CollaboratorMainPage = () => {
  const glowHandlers = useMouseGlow();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Olá, Colaborador</h1>
        <p className="fs-5 text-light opacity-75">Seu espaço para produtividade e desenvolvimento.</p>
      </div>

      <div
    className="gap-4"
    style={{
      display: isMobile ? "flex" : "grid",
      flexDirection: isMobile ? "column" : "initial",
      gridTemplateColumns: isMobile ? undefined : "repeat(2, 1fr)",
      gridTemplateRows: isMobile ? undefined : "repeat(2, 1fr)",
    }}
  >
    {/* Card para Minhas Tarefas */}
    <Link
      to="/applications"
      className="glass-card summary-card"
      style={{ "--card-index": 1 }}
      {...glowHandlers}
    >
      <span className="card-icon">✅</span>
      <h3>Minhas Inscrições</h3>
      <p className="text-light opacity-75">Veja suas inscrições em vagas internas da empresa.</p>
      <span className="card-link">Ver Inscrições &rarr;</span>
    </Link>

    {/* Card para Meu Desempenho */}
    <Link
      to="/performance"
      className="glass-card summary-card"
      style={{ "--card-index": 2 }}
      {...glowHandlers}
    >
      <span className="card-icon">🚀</span>
      <h3>Meu Desempenho</h3>
      <p className="text-light opacity-75">Acompanhe suas metas e feedbacks recebidos.</p>
      <span className="card-link">Ver Desempenho &rarr;</span>
    </Link>

    {/* Card para Meu Perfil */}
    <Link
      to="/profile"
      className="glass-card summary-card"
      style={{
        "--card-index": 3,
        gridColumn: isMobile ? undefined : "span 2 / span 2",
        gridRowStart: isMobile ? undefined : "2",
      }}
      {...glowHandlers}
    >
      <span className="card-icon">👤</span>
      <h3>Meu Perfil</h3>
      <p className="text-light opacity-75">Mantenha suas informações e competências atualizadas.</p>
      <span className="card-link">Ver Perfil &rarr;</span>
    </Link>
  </div>
    </main>
  );
};

export default CollaboratorMainPage;