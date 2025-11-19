import React, { useState, useEffect } from 'react';
import './MinhasInscricoesPage.css';
import { getMyApplications } from '../../services/api'; // Importa a função da API

const MinhasInscricoesPage = ({ userId }) => {
  // Estados para gerenciar os dados, carregamento e erros
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para buscar os dados quando o componente for montado
  useEffect(() => {
    let isMounted = true; // Flag para verificar se o componente está montado

    const fetchApplications = async () => {
      try {
        const data = await getMyApplications(userId);
        if (isMounted) {
          setApplications(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Ocorreu um erro ao buscar suas inscrições. Tente novamente mais tarde.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchApplications();
    return () => { isMounted = false; }; // Função de limpeza
  }, [userId]);

  // Renderização condicional baseada no estado
  if (isLoading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="text-light mt-2">Buscando suas inscrições...</p>
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

  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Minhas Inscrições</h1>
        <p className="fs-5 text-light opacity-75">Acompanhe o status das suas candidaturas em vagas internas.</p>
      </div>

      <div className="d-flex flex-column gap-4">
        {applications.map((app, index) => (
          <div key={app.id} className="glass-card p-4" style={{ '--card-index': index + 1 }}>
            <div className="d-flex justify-content-between align-items-start">
              <h4 className="h5 fw-bold text-white mb-1">{app.title}</h4>
              <span className={`badge rounded-pill fs-6 status-${app.status_class}`}>{app.status}</span>
            </div>
            <p className="application-date text-light opacity-75 mb-0">Inscrição realizada em: {app.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasInscricoesPage;