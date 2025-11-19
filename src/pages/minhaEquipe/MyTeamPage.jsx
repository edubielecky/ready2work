import React, { useState } from 'react';
import './MyTeamPage.css'; // CSS específico da página

// Dados fictícios da equipe
const teamData = [
  { id: 1, name: 'João Silva', role: 'Desenvolvedor Front-end', status: 'online', email: 'joao.silva@example.com', performance: 92, skills: ['React', 'CSS', 'TypeScript'] },
  { id: 2, name: 'Maria Souza', role: 'Desenvolvedora Back-end', status: 'online', email: 'maria.souza@example.com', performance: 88, skills: ['Node.js', 'Python', 'SQL'] },
  { id: 3, name: 'Pedro Martins', role: 'UI/UX Designer', status: 'offline', email: 'pedro.martins@example.com', performance: 95, skills: ['Figma', 'Adobe XD', 'User Research'] },
  { id: 4, name: 'Ana Costa', role: 'QA Tester', status: 'online', email: 'ana.costa@example.com', performance: 85, skills: ['Cypress', 'Jest', 'Automação'] },
  { id: 5, name: 'Lucas Andrade', role: 'DevOps', status: 'offline', email: 'lucas.andrade@example.com', performance: 90, skills: ['AWS', 'Docker', 'Kubernetes'] },
];

const MyTeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowDetails = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div className="container mt-4">
      <h1 className="mb-4 fw-bold">Minha Equipe</h1>

      <div className="row g-4">
        {teamData.map((member, index) => (
          <div key={member.id} className="col-md-6 col-lg-4">
            <div className="glass-card team-member-card" style={{ '--card-index': index + 1 }}>
              <div className={`status-indicator ${member.status}`}></div>
              <div className="team-member-avatar">
                {member.name.charAt(0)}
              </div>
              <h4>{member.name}</h4>
              <p className="text-light opacity-75">{member.role}</p>
              <button className="btn btn-outline-light" onClick={() => handleShowDetails(member)}>Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Modal de Detalhes do Colaborador */}
      {selectedMember && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content glass-card">
              <div className="modal-header border-0">
                <h5 className="modal-title card-title" style={{borderBottom: 'none', marginBottom: 0}}>Detalhes do Colaborador</h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <div className="team-member-avatar mx-auto">
                  {selectedMember.name.charAt(0)}
                </div>
                <h3 className='text-light mt-3'>{selectedMember.name}</h3>
                <p className="text-light opacity-75">{selectedMember.role}</p>
                <a href={`mailto:${selectedMember.email}`} className="text-light opacity-50 d-block mb-4">{selectedMember.email}</a>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h5 className='h6 text-light opacity-75 mb-3'>COMPETÊNCIAS</h5>
                    <ul className="skills-list">
                      {selectedMember.skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0">
                    <h5 className='h6 text-light opacity-75 mb-2'>PERFORMANCE</h5>
                    <div className="percentage-chart mx-auto" style={{'--percentage': selectedMember.performance}}>
                      <span className="percentage-text">{selectedMember.performance}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyTeamPage;