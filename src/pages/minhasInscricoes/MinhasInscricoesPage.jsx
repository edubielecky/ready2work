import React, { useState, useEffect } from 'react';
import './MinhasInscricoesPage.css';
import { getMyApplications } from '../../services/api';

/* =====================================
   FUNÇÃO DE MAPEAMENTO DE STATUS
===================================== */
const getStatusClass = (statusText) => {
    if (!statusText) return 'default';

    const normalizedStatus = statusText.toLowerCase();

    if (normalizedStatus.includes('análise')) return 'analise';
    if (normalizedStatus.includes('entrevista')) return 'entrevista';
    if (normalizedStatus.includes('rejeitado')) return 'rejeitado';
    if (normalizedStatus.includes('aprovado')) return 'aprovado';
    if (normalizedStatus.includes('pendente')) return 'pendente';

    return 'default';
};

/* =====================================
   COMPONENTE PRINCIPAL
===================================== */

const MinhasInscricoesPage = ({ userId }) => {
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    /* -------------------------------------
       CARREGAR INSCRIÇÕES DO USUÁRIO
    -------------------------------------- */
    useEffect(() => {
        if (!userId) {
            setIsLoading(false);
            return;
        }

        let isMounted = true;
        console.log("DEBUG: Buscando aplicações para userId:", userId);

        const fetchApplications = async () => {
            try {
                const data = await getMyApplications(userId);
                console.log("DEBUG: Dados recebidos:", data);

                if (isMounted) {
                    setApplications(data);
                }
            } catch (err) {
                console.error("DEBUG: Erro ao buscar aplicações:", err);
                if (isMounted) {
                    setError("Ocorreu um erro ao buscar suas inscrições. Tente novamente mais tarde.");
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchApplications();
        return () => { isMounted = false; };
    }, [userId]);

    /* -------------------------------------
       LOADING
    -------------------------------------- */
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

    /* -------------------------------------
       ERRO
    -------------------------------------- */
    if (error) {
        return (
            <div className="container mt-4 text-center">
                <div className="alert alert-danger">{error}</div>
            </div>
        );
    }

    /* -------------------------------------
       CONTEÚDO PRINCIPAL
    -------------------------------------- */
    return (
        <div className="container mt-4">

            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Minhas Inscrições</h1>
                <p className="fs-5 text-light opacity-75">
                    Acompanhe o status das suas candidaturas em vagas internas.
                </p>
            </div>

            <div className="applications-list">

                {applications.length === 0 ? (
                    <div className="alert alert-info text-center">
                        Você ainda não possui inscrições.
                    </div>
                ) : (
                    applications.map((app, index) => (
                        <div
                            key={app.id}
                            className="application-card"
                            style={{ "--card-index": index + 1 }}
                        >
                            <div className="application-header">
                                <h4 className="job-title">{app.jobTitle}</h4>

                                <span className={`status-badge status-${getStatusClass(app.status)}`}>
                                    {app.status}
                                </span>
                            </div>

                            <p className="application-date text-light opacity-75 mb-0">
                                Inscrição realizada em: {app.applicationDate}
                            </p>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default MinhasInscricoesPage;
