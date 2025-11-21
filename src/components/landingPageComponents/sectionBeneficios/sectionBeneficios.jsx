import { Briefcase, User, Users } from "lucide-react";

export default function SectionBeneficios() {
    return (
          <section id="beneficios" className="py-5 py-md-5 bg-dark-custom">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Benefícios para Todos</h2>
                <p className="lead text-secondary-custom">Nossa plataforma garante impacto positivo em todos os níveis da sua organização.</p>
              </div>
              <div className="row g-4">
                {/* Gestores */}
                <div className="col-lg-4">
                  <div className="card card-custom p-4 h-100">
                    <Briefcase className="text-primary-custom mb-3" size={32} />
                    <h4 className="fw-bold text-white">Para Gestores</h4>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Encontra talentos internos mais rápido</li>
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Aumenta produtividade da equipe e da área</li>
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Reduz custos e a alta rotatividade</li>
                    </ul>
                  </div>
                </div>
                {/* Colaboradores */}
                <div className="col-lg-4">
                  <div className="card card-custom p-4 h-100">
                    <User className="text-primary-custom mb-3" size={32} />
                    <h4 className="fw-bold text-white">Para Colaboradores</h4>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Crescimento real e planejado na carreira</li>
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Trilhas de aprendizado personalizadas</li>
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Transparência total sobre movimentações</li>
                    </ul>
                  </div>
                </div>
                {/* RH */}
                <div className="col-lg-4">
                  <div className="card card-custom p-4 h-100">
                    <Users className="text-primary-custom mb-3" size={32} />
                    <h4 className="fw-bold text-white">Para o RH</h4>
                    <ul className="list-unstyled mt-3">
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Processo padronizado e digitalizado</li>
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Métricas reais de requalificação</li>
                      <li className="mb-2 text-white"><span className="text-primary-custom me-2">&bull;</span> Zero subjetividade na realocação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}