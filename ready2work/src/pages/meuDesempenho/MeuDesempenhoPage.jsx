import React from 'react';
import './MeuDesempenhoPage.css';

const MeuDesempenhoPage = () => {
  // Dados fictícios
  const performanceData = {
    overallScore: 88,
    goals: { completed: 12, total: 15 },
    skills: [
      { name: 'Comunicação', score: 90 },
      { name: 'Trabalho em Equipe', score: 95 },
      { name: 'Proatividade', score: 85 },
      { name: 'Conhecimento Técnico', score: 82 },
    ],
    recentFeedback: [
      { from: 'Gestor Exemplo', text: 'Excelente iniciativa no projeto X, sua contribuição foi fundamental.' },
      { from: 'Maria Souza', text: 'Ótima colaboração na resolução do bug Y.' },
    ]
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Meu Desempenho</h1>
        <p className="fs-5 text-light opacity-75">Acompanhe suas metas, competências e feedbacks.</p>
      </div>

      <div className="row g-4">
        {/* Card Principal de Performance */}
        <div className="col-lg-4">
          <div className="glass-card performance-card p-4 text-center" style={{'--card-index': 1}}>
            <h3 className="card-title">Pontuação Geral</h3>
            <div className="percentage-chart mx-auto" style={{'--percentage': performanceData.overallScore}}>
              <span className="percentage-text">{performanceData.overallScore}%</span>
            </div>
            <p className="mt-3 text-light opacity-75">Acima da média esperada</p>
          </div>
        </div>

        {/* Competências e Metas */}
        <div className="col-lg-8">
          <div className="glass-card performance-card p-4" style={{'--card-index': 2}}>
            <h3 className="card-title">Competências</h3>
            <ul className="list-unstyled">
              {performanceData.skills.map(skill => (
                <li key={skill.name} className="mb-3">
                  <span>{skill.name}</span>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: `${skill.score}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feedbacks Recentes */}
        <div className="col-12">
          <div className="glass-card performance-card p-4" style={{'--card-index': 3}}>
            <h3 className="card-title">Feedbacks Recentes</h3>
            {performanceData.recentFeedback.map((fb, index) => (
              <div key={index} className="feedback-item mb-3">
                <p className="feedback-text">"{fb.text}"</p>
                <small className="feedback-author">- {fb.from}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeuDesempenhoPage;