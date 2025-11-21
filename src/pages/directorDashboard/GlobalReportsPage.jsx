import React, { useState } from 'react';
import './GlobalReportsPage.css'; // Importando o CSS

const GlobalReportsPage = () => {
  const [reportType, setReportType] = useState('performance');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [format, setFormat] = useState('pdf');

  // Dados fictícios para relatórios recentes
  const recentReports = [
    { name: 'Relatório de Performance Trimestral - Q2 2024', date: 'Gerado em 01/07/2024', icon: '📈' },
    { name: 'Análise de Turnover - Primeiro Semestre 2024', date: 'Gerado em 28/06/2024', icon: '👥' },
    { name: 'Relatório de Alocação de Recursos', date: 'Gerado em 15/06/2024', icon: '📊' },
  ];

  const handleGenerateReport = (e) => {
    e.preventDefault();
    // Lógica de geração de relatório (aqui apenas um log)
    console.log(`Gerando relatório:
      Tipo: ${reportType}
      De: ${startDate}
      Até: ${endDate}
      Formato: ${format}`);
    alert('Seu relatório está sendo gerado e estará disponível em breve na lista de "Relatórios Recentes".');
  };

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-2">Relatórios Globais</h1>
        <p className="fs-5 text-light opacity-75">Gere e visualize relatórios consolidados.</p>
      </div>

      <div className="row g-4">
        {/* Coluna do Gerador de Relatórios */}
        <div className="col-lg-5">
          <div className="glass-card p-4 h-100">
            <h3 className="h5 mb-4">Gerador de Relatórios</h3>
            <form onSubmit={handleGenerateReport} className="d-flex flex-column gap-3 report-generator-form">
              <div>
                <label htmlFor="reportType" className="form-label">Tipo de Relatório</label>
                <select id="reportType" className="form-select" value={reportType} onChange={e => setReportType(e.target.value)}>
                  <option value="performance">Performance Geral</option>
                  <option value="talent">Análise de Talentos</option>
                  <option value="turnover">Turnover e Retenção</option>
                  <option value="allocation">Alocação de Recursos</option>
                </select>
              </div>
              <div>
                <label htmlFor="startDate" className="form-label">Período</label>
                <div className="d-flex align-items-center gap-2">
                  <input type="date" id="startDate" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} />
                  <span>até</span>
                  <input type="date" id="endDate" className="form-control" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>
              </div>
              <div>
                <label htmlFor="format" className="form-label">Formato</label>
                <select id="format" className="form-select" value={format} onChange={e => setFormat(e.target.value)}>
                  <option value="pdf">PDF</option>
                  <option value="csv">CSV</option>
                  <option value="xlsx">Excel (XLSX)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Gerar Relatório</button>
            </form>
          </div>
        </div>

        {/* Coluna de Relatórios Recentes */}
        <div className="col-lg-7">
          <div className="glass-card p-4 h-100">
            <h3 className="h5 mb-3">Relatórios Recentes</h3>
            <div>
              {recentReports.map((report, index) => (
                <div key={index} className="report-list-item">
                  <div className="report-info">
                    <span className="report-icon">{report.icon}</span>
                    <div className="report-details">
                      <p className="report-name">{report.name}</p>
                      <p className="report-date">{report.date}</p>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-light">Download</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GlobalReportsPage;

