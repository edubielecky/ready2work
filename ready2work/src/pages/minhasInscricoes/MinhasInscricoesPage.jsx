import React from 'react';
import './MinhasInscricoesPage.css';

// Dados fictícios de inscrições para simulação
const fakeApplications = [
  {
    id: 1,
    jobTitle: 'Desenvolvedor Front-end Sênior',
    applicationDate: '25/07/2024',
    status: 'Em Análise',
    statusClass: 'analise' // Classe CSS para a cor do status
  },
  {
    id: 2,
    jobTitle: 'UI/UX Designer Pleno',
    applicationDate: '18/07/2024',
    status: 'Entrevista Agendada',
    statusClass: 'aprovado'
  },
  {
    id: 3,
    jobTitle: 'Analista de Dados Jr',
    applicationDate: '10/06/2024',
    status: 'Rejeitado',
    statusClass: 'rejeitado'
  },
];

const MinhasInscricoesPage = () => {
  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Minhas Inscrições</h1>
        <p className="fs-5 text-light opacity-75">Acompanhe o status das suas candidaturas em vagas internas.</p>
      </div>

      <div className="d-flex flex-column gap-4">
        {fakeApplications.map((app, index) => (
          <div key={app.id} className="glass-card p-4" style={{ '--card-index': index + 1 }}>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h4 className="h5 fw-bold text-white mb-0">{app.jobTitle}</h4>
              <span className={`badge rounded-pill fs-6 status-${app.statusClass}`}>{app.status}</span>
            </div>
            <p className="application-date text-light opacity-75">Inscrição realizada em: {app.applicationDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasInscricoesPage;