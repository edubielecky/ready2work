import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = ({ userRole }) => {
  const renderCollaboratorHeader = () => (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '1px solid #ccc' }}></header>);
  // let welcomeMessage = '';
  let navLinks = [];

  // Define as boas-vindas e os links de navegação com base no perfil do usuário
  switch (userRole) {
    case 'collaborator':
      // welcomeMessage = 'Bem-vindo, Colaborador!';
      navLinks = [
        { to: '/applications', text: 'Minhas Inscrições' },
        { to: '/performance', text: 'Meu Desempenho' },
        { to: '/profile', text: 'Meu Perfil' },
      ];
      break;
    case 'manager':
      // welcomeMessage = 'Bem-vindo, Gestor!';
      navLinks = [
        { to: '/dashboard', text: 'Dashboard' },
        { to: '/team', text: 'Minha Equipe' },
        { to: '/profile', text: 'Meu Perfil' },
      ];
      break;
    case 'director':
      // welcomeMessage = 'Bem-vindo, Diretor!';
      navLinks = [
        { to: '/overview', text: 'Visão Geral' },
        { to: '/analytics', text: 'Análises' },
        { to: '/strategy', text: 'Estratégia' },
        { to: '/settings', text: 'Configurações' },
      ];
      break;
    default:
      navLinks = [
        { to: '/about', text: 'Sobre' },
        { to: '/contact', text: 'Contate' },
        { to: '/login', text: 'Entrar' },
      ]; // Ou um cabeçalho padrão para usuários não autenticados
  }

  return (
    <nav 
      className="navbar container mt-3 px-2 navbar-expand-lg navbar-dark rounded-5"
        style={{ 
          background: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          borderRadius: "15px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          color: "var(--text-color)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          animation: "card-fade-in 0.5s ease-out forwards",
          opacity: "0",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-5" to="/">Ready2Work.</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <Link className="nav-link" to={link.to} style={{ transition: 'color 0.2s ease' }}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;