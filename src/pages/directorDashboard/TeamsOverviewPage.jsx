import React from 'react';
import { Link } from 'react-router-dom';
import './TeamsOverviewPage.css'; // Importando o CSS

const TeamsOverviewPage = () => {
  // Dados fictícios
  const teams = [
    { id: 1, department: 'Tecnologia & Inovação', manager: 'Carlos Silva', members: 28, performance: 'Alta', perfClass: 'dot-high' },
    { id: 2, department: 'Vendas e Marketing', manager: 'Ana Pereira', members: 15, performance: 'Alta', perfClass: 'dot-high' },
    { id: 3, department: 'Operações e Logística', manager: 'João Mendes', members: 35, performance: 'Média', perfClass: 'dot-medium' },
    { id: 4, department: 'Recursos Humanos', manager: 'Mariana Costa', members: 8, performance: 'Alta', perfClass: 'dot-high' },
    { id: 5, department: 'Financeiro', manager: 'Ricardo Alves', members: 12, performance: 'Baixa', perfClass: 'dot-low' },
  ];

  const totalEmployees = teams.reduce((acc, team) => acc + team.members, 0);

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-2">Visão Geral das Equipes</h1>
        <p className="fs-5 text-light opacity-75">Análise de performance e alocação dos times.</p>
      </div>

      {/* --- Linha de KPIs de Equipes --- */}
      <div className="row g-4 justify-content-center mb-4">
        <div className="col-md-4">
          <div className="glass-card p-4 text-center">
            <h3 className="h5">Total de Colaboradores</h3>
            <p className="display-5 fw-bold text-primary mb-1">{totalEmployees}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="glass-card p-4 text-center">
            <h3 className="h5">Número de Departamentos</h3>
            <p className="display-5 fw-bold text-info mb-1">{teams.length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="glass-card p-4 text-center">
            <h3 className="h5">Média de Membros/Time</h3>
            <p className="display-5 fw-bold text-light mb-1">{(totalEmployees / teams.length).toFixed(1)}</p>
          </div>
        </div>
      </div>

      {/* --- Lista de Departamentos --- */}
      <div className="row">
        <div className="col-12">
          <div className="glass-card p-4">
            <h3 className="h5 mb-3">Departamentos</h3>
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col" style={{ minWidth: '200px' }}>Departamento</th>
                    <th scope="col" style={{ minWidth: '150px' }}>Gestor Responsável</th>
                    <th scope="col" className="text-center">Membros</th>
                    <th scope="col">Performance</th>
                    <th scope="col" className="text-end">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(team => (
                    <tr key={team.id}>
                      <td className="fw-bold">{team.department}</td>
                      <td className="team-manager-name">{team.manager}</td>
                      <td className="text-center">{team.members}</td>
                      <td>
                        <div className="performance-indicator">
                          <div className={`performance-dot ${team.perfClass}`}></div>
                          <span>{team.performance}</span>
                        </div>
                      </td>
                      <td className="text-end"><Link to={`/teams/${team.id}`} className="btn btn-sm btn-outline-light">Detalhes</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamsOverviewPage;
