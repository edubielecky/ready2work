import React, { useState } from 'react';
import './ManagerDashboard.css'; // Importa o CSS específico

// Dados fictícios para as aprovações
const pendingApprovalsData = [
  { id: 1, name: 'Carlos Pereira', currentRole: 'Analista de Suporte', appliedRole: 'Dev. Front-end Junior', fitness: 75 },
  { id: 2, name: 'Mariana Lima', currentRole: 'Designer Gráfico', appliedRole: 'Dev. Python Pleno', fitness: 60 },
];

const ManagerDashboard = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleShowModal = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <>
      {/* O container principal do dashboard */}
      <div className="container mt-4">
      <h1 className="mb-4 fw-bold">Dashboard do Gestor</h1>

      <div className="row g-4" >
        {/* Card de Visão Geral da Equipe */}
        <div className="col-md-6">
          {/* Adicionamos a classe 'dashboard-card' e a variável de estilo para o delay */}
          <div className="glass-card dashboard-card p-4 h-100" style={{'--card-index': 1}}>
            <h3 className="card-title">Visão Geral da Equipe</h3>
            <div className="row">
              <div className="col">
                <span className="stat-number">8</span>
                <p className="text-light opacity-75 mb-0">Membros ativos</p>
              </div>
              <div className="col">
                <span className="stat-number">3</span>
                <p className="text-light opacity-75 mb-0">Projetos em andamento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Aprovações Pendentes */}
        <div className="col-md-6">
          <div className="glass-card dashboard-card p-4 h-100" style={{'--card-index': 2}}>
            <h3 className="card-title">Aprovações Pendentes</h3>
            {pendingApprovalsData.map(candidate => (
              <div key={candidate.id} className="pending-item" onClick={() => handleShowModal(candidate)}>
                <div>
                  <p className="mb-0 fw-bold text-light">{candidate.name}</p>
                  <small className="text-light opacity-50">Vaga: {candidate.appliedRole}</small>
                </div>
                <div className="pending-actions">
                  <span className="text-light opacity-75">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nova Seção de Contratação */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="glass-card dashboard-card p-4" style={{'--card-index': 3}}>
            <h3 className="card-title">Minhas Vagas (Contratação)</h3>
            <div className="row">
              {/* Coluna de Vagas Abertas */}
              <div className="col-lg-6">
                <h4 className="h6 text-light opacity-75 mb-3">VAGAS ABERTAS</h4>
                <div className="job-card">
                  <h5>Desenvolvedor Front-end Junior</h5>
                  <span className="badge rounded-pill text-bg-primary">Remoto</span>
                </div>
                <div className="job-card">
                  <h5>Desenvolvedor Python Pleno</h5>
                  <span className="badge rounded-pill text-bg-success">Híbrido</span>
                </div>
              </div>

              {/* Coluna de Candidatos Internos */}
              <div className="col-lg-6 mt-4 mt-lg-0">
                <h4 className="h6 text-light opacity-75 mb-3">CANDIDATOS INTERNOS SUGERIDOS</h4>
                <div className="candidate-item">
                  <div>
                    <p className="mb-0 fw-bold text-light">Ana Beatriz</p>
                    <small className="text-light opacity-50">Setor: Marketing | Competências: Lógica, HTML/CSS</small>
                  </div>
                  <button className="btn btn-sm btn-outline-light">Ver Perfil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Modal de Aprovação de Candidato */}
      {selectedCandidate && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content glass-card">
              <div className="modal-header border-0">
                <h5 className="modal-title card-title" style={{borderBottom: 'none', marginBottom: 0}}>Análise de Candidato</h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <h3 className='text-light'>{selectedCandidate.name}</h3>
                <p className="text-light opacity-50 mb-1">Cargo Atual: {selectedCandidate.currentRole}</p>
                <p className="text-light opacity-75">Candidatura para: <span className='fw-bold'>{selectedCandidate.appliedRole}</span></p>

                <div className="percentage-chart mx-auto my-4" style={{'--percentage': selectedCandidate.fitness}}>
                  <span className="percentage-text">{selectedCandidate.fitness}%</span>
                  <p className='mb-0'>Apto</p>
                </div>

              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button type="button" className="btn btn-lg btn-danger">Recusar</button>
                <button type="button" className="btn btn-lg btn-success">Aceitar Candidatura</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagerDashboard;