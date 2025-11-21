import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './header.css';

const Header = ({ userRole, homeRoute, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Chama a função de logout passada pelo App.jsx
    if (onLogout) {
      onLogout();
    }
    // Redireciona para a página de login após o logout
    navigate('/login');
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark glass-header container mt-3 rounded-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to={homeRoute || '/'}>
          Ready2Work
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Links para Colaborador */}
            {userRole === 'collaborator' && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">Início</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/applications">Minhas Inscrições</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/performance">Meu Desempenho</NavLink>
                </li>
              </>
            )}

            {/* Links para Gestor */}
            {userRole === 'manager' && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/team">Minha Equipe</NavLink>
                </li>
              </>
            )}

            {/* Links para Diretor */}
            {userRole === 'director' && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/executive-dashboard">Dashboard Executivo</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/teams-overview">Visão de Equipes</NavLink>
                </li>
                 <li className="nav-item">
                  <NavLink className="nav-link" to="/global-reports">Relatórios</NavLink>
                </li>
              </>
            )}

            {/* Links Comuns a todos os perfis logados */}
            {userRole && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Meu Perfil</NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-outline-light btn-sm ms-lg-2">
                    Sair
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;