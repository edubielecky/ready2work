import React from 'react';
import './DirectorDashboardPage.css'; // Importando o CSS específico

const ExecutiveDashboardPage = () => {
  // Dados fictícios para os componentes
  const monthlyRevenue = [
    { month: 'Mar', value: 65 },
    { month: 'Abr', value: 70 },
    { month: 'Mai', value: 85 },
    { month: 'Jun', value: 80 },
    { month: 'Jul', value: 95 },
    { month: 'Ago', value: 100 },
  ];

  const departmentPerformance = [
    { name: 'Tecnologia', progress: 92, color: 'bg-info' },
    { name: 'Vendas', progress: 85, color: 'bg-success' },
    { name: 'Marketing', progress: 78, color: 'bg-warning' },
    { name: 'Operações', progress: 95, color: 'bg-primary' },
  ];

  const strategicProjects = [
    { name: 'Expansão para Mercado LATAM', status: 'Em Andamento', statusClass: 'status-andamento' },
    { name: 'Lançamento do Produto "Phoenix"', status: 'Atrasado', statusClass: 'status-atrasado' },
    { name: 'Migração para Nova Infra Cloud', status: 'Concluído', statusClass: 'status-concluido' },
    { name: 'Programa de Retenção de Talentos', status: 'Em Andamento', statusClass: 'status-andamento' },
  ];

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-2">Dashboard Executivo</h1>
        <p className="fs-5 text-light opacity-75">KPIs globais e resultados da empresa.</p>
      </div>

      {/* --- Linha de KPIs Principais --- */}
      <div className="row g-4 justify-content-center mb-4">
        <div className="col-md-6 col-lg-4">
          <div className="glass-card p-4 text-center">
            <h3 className="h5">Receita Total</h3>
            <p className="display-5 fw-bold text-success mb-1">R$ 1.2M</p>
            <small className="text-light opacity-75">+5.2% vs. Mês Anterior</small>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="glass-card p-4 text-center">
            <h3 className="h5">Crescimento de Clientes</h3>
            <p className="display-5 fw-bold text-info mb-1">8,450</p>
            <small className="text-light opacity-75">+120 nesta semana</small>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="glass-card p-4 text-center">
            <h3 className="h5">Satisfação (NPS)</h3>
            <p className="display-5 fw-bold text-warning mb-1">45</p>
            <small className="text-light opacity-75">Meta: 50</small>
          </div>
        </div>
      </div>

      {/* --- Linha de Gráficos e Detalhes --- */}
      <div className="row g-4">
        {/* Gráfico de Receita Mensal */}
        <div className="col-lg-7">
          <div className="glass-card p-4 h-100">
            <h3 className="h5 mb-3">Receita Mensal (Últimos 6 meses)</h3>
            <div className="chart-container">
              {monthlyRevenue.map(item => (
                <div key={item.month} className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: `${item.value}%` }} title={`R$ ${item.value}k`}></div>
                  <span className="bar-label">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance por Departamento */}
        <div className="col-lg-5">
          <div className="glass-card p-4 h-100 d-flex flex-column">
            <h3 className="h5 mb-4">Performance por Departamento</h3>
            <div className="d-flex flex-column gap-3">
              {departmentPerformance.map(dept => (
                <div key={dept.name}>
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-light opacity-75">{dept.name}</span>
                    <span className="fw-bold">{dept.progress}%</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className={`progress-bar ${dept.color}`} role="progressbar" style={{ width: `${dept.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Linha de Projetos Estratégicos --- */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="glass-card p-4">
            <h3 className="h5 mb-3">Projetos Estratégicos em Andamento</h3>
            <div>
              {strategicProjects.map(project => (
                <div key={project.name} className="project-list-item">
                  <span>{project.name}</span>
                  <span className={`project-status ${project.statusClass}`}>{project.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExecutiveDashboardPage;
