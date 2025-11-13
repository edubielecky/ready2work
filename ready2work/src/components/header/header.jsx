import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userRole }) => {
  const renderCollaboratorHeader = () => (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '1px solid #ccc' }}></header>);
  let welcomeMessage = '';
  let navLinks = [];

  // Define as boas-vindas e os links de navegação com base no perfil do usuário
  switch (userRole) {
    case 'collaborator':
      welcomeMessage = 'Bem-vindo, Colaborador!';
      navLinks = [
        { to: '/dashboard', text: 'Dashboard' },
        { to: '/tasks', text: 'Minhas Tarefas' },
        { to: '/profile', text: 'Meu Perfil' },
      ];
      break;
    case 'manager':
      welcomeMessage = 'Bem-vindo, Gestor!';
      navLinks = [
        { to: '/dashboard', text: 'Dashboard' },
        { to: '/team', text: 'Minha Equipe' },
        { to: '/profile', text: 'Meu Perfil' },
      ];
      break;
    case 'director':
      welcomeMessage = 'Bem-vindo, Diretor!';
      navLinks = [
        { to: '/overview', text: 'Visão Geral' },
        { to: '/analytics', text: 'Análises' },
        { to: '/strategy', text: 'Estratégia' },
        { to: '/settings', text: 'Configurações' },
      ];
      break;
    default:
      return null; // Ou um cabeçalho padrão para usuários não autenticados
  }

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark" 
      style={{ 
        backgroundColor: 'rgba(15, 15, 25, 0.5)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{welcomeMessage}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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