import { User, Aperture, LayoutGrid, Award } from "lucide-react";

export default function SectionComoFunciona() {
    return (
          <section id="como-funciona" className="py-5 py-md-5 bg-dark-custom">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Como Funciona em 4 Etapas</h2>
                <p className="lead text-secondary-custom">Um fluxo simplificado para mobilidade interna eficiente.</p>
              </div>
              <div className="row justify-content-center">
                {[
                  { icon: <User size={24} />, title: "1. Cadastro de Skills", description: "O colaborador registra e atualiza suas habilidades e objetivos no sistema." },
                  { icon: <Aperture size={24} />, title: "2. Matching com IA", description: "O motor de IA recomenda vagas internas compatíveis com o perfil cadastrado." },
                  { icon: <LayoutGrid size={24} />, title: "3. Workflow Transparente", description: "Gestores e RH acompanham a solicitação e aprovação via fluxo padronizado." },
                  { icon: <Award size={24} />, title: "4. Desenvolvimento", description: "O colaborador recebe trilhas de aprendizado sugeridas para a nova função." },
                ].map((step, index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-4">
                    <div className="card card-custom p-4 h-100 step-card">
                      <div className="d-flex align-items-center mb-3">
                        <span className="icon-glow p-2 me-3">{step.icon}</span>
                        <h5 className="fw-bold m-0 text-white">{step.title}</h5>
                      </div>
                      <p className="card-text text-secondary-custom text-white">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    )
}