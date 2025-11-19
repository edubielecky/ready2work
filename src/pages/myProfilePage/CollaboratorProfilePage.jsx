import React, { useState, useEffect } from 'react';
import './CollaboratorProfilePage.css';
import { getCollaboratorProfile } from '../../services/api';

const CollaboratorProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchProfile = async () => {
      try {
        // Por enquanto, vamos buscar o usuário com ID 1 como exemplo
        const profileData = await getCollaboratorProfile(1);
        if (isMounted) {
          setProfile(profileData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProfile();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="text-light mt-2">Carregando perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4 text-center">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  // Se o perfil não for encontrado por algum motivo
  if (!profile) {
    return <div className="container mt-4 text-center"><div className="alert alert-warning">Perfil não disponível.</div></div>;
  }

  return (
    <div className="container mt-4">
      {/* Cabeçalho do Perfil */}
      <div className="glass-card profile-header">
        <div className="profile-avatar">{profile.name.charAt(0)}</div>
        <h2>{profile.name}</h2>
        <p className="text-light opacity-75">{profile.role}</p>
      </div>

      <div className="row g-4 mt-2">
        {/* Informações Gerais */}
        <div className="col-lg-4">
          <div className="glass-card p-4 h-100" style={{'--card-index': 1}}>
            <h3 className="card-title-profile">Informações</h3>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between mb-2"><span>Email</span><span className="text-light text-end text-break">{profile.email}</span></li>
              <li className="d-flex justify-content-between mb-2"><span>Departamento</span><span className="text-light">{profile.department}</span></li>
              <li className="d-flex justify-content-between mb-2"><span>Gestor Direto</span><span className="text-light">{profile.manager}</span></li>
              <li className="d-flex justify-content-between"><span>Data de Admissão</span><span className="text-light">{profile.joinDate}</span></li>
            </ul>
          </div>
        </div>

        {/* Competências */}
        <div className="col-lg-8">
          <div className="glass-card p-4 h-100" style={{'--card-index': 2}}>
            <h3 className="card-title-profile">Competências</h3>
            <div className="d-flex flex-wrap gap-2">
              {profile.skills.map(skill => (
                <div key={skill.name} className="skill-tag badge">
                  {skill.name} <span className={`skill-level level-${skill.level.toLowerCase()}`}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Histórico de Carreira */}
        <div className="col-lg-6">
          <div className="glass-card p-4" style={{'--card-index': 3}}>
            <h3 className="card-title-profile">Histórico de Carreira</h3>
            <ul className="timeline">
              {profile.careerHistory.map(item => (
                <li key={item.role}><strong>{item.role}</strong><small>{item.period}</small></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Treinamentos e Certificações */}
        <div className="col-lg-6">
          <div className="glass-card p-4" style={{'--card-index': 4}}>
            <h3 className="card-title-profile">Treinamentos e Certificações</h3>
            <ul className="list-unstyled">
              {profile.trainings.map(training => <li key={training} className="mb-2">✅ {training}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaboratorProfilePage;


