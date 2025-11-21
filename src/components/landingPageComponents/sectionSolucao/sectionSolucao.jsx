import { Users, Aperture, LayoutGrid, Award } from "lucide-react";

export default function SectionSolucao() {
    return (
          <section id="solucao" className="py-5 py-md-5 bg-dark-custom">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">A Solução Ready2Work</h2>
                <p className="lead text-secondary-custom">Como a nossa plataforma transforma a gestão de mobilidade interna com 4 pilares.</p>
              </div>
              <div className="row g-4">
                {/* Card 1: Cadastro */}
                <div className="col-md-6 col-lg-3">
                  <div className="card card-custom p-4 h-100 text-center">
                    <div className="icon-glow mx-auto"><Users size={32} /></div>
                    <h5 className="card-title fw-bold text-white">Cadastro Inteligente de Habilidades</h5>
                    <p className="card-text text-secondary-custom text-white">Funcionários registram hard skills, soft skills, experiências e objetivos de carreira em uma interface intuitiva.</p>
                  </div>
                </div>
                {/* Card 2: IA */}
                <div className="col-md-6 col-lg-3">
                  <div className="card card-custom p-4 h-100 text-center">
                    <div className="icon-glow mx-auto"><Aperture size={32} /></div>
                    <h5 className="card-title fw-bold text-white">Motor de Recomendação com IA</h5>
                    <p className="card-text text-secondary-custom text-white">Matching entre perfis e vagas internas, além de sugestões de trilhas e cursos via APIs (Alura, Coursera, Udemy).</p>
                  </div>
                </div>
                {/* Card 3: Workflow */}
                <div className="col-md-6 col-lg-3">
                  <div className="card card-custom p-4 h-100 text-center">
                    <div className="icon-glow mx-auto"><LayoutGrid size={32} /></div>
                    <h5 className="card-title fw-bold text-white">Workflow Padronizado e Transparente</h5>
                    <p className="card-text text-secondary-custom text-white">Fluxo completo de movimentação interna com status claros, histórico de decisões e aprovações padronizadas.</p>
                  </div>
                </div>
                {/* Card 4: Gamificação */}
                <div className="col-md-6 col-lg-3">
                  <div className="card card-custom p-4 h-100 text-center">
                    <div className="icon-glow mx-auto"><Award size={32} /></div>
                    <h5 className="card-title fw-bold text-white">Engajamento com Gamificação</h5>
                    <p className="card-text text-secondary-custom text-white">Pontos, badges e ranking interno para aumentar a adesão cultural e incentivar o desenvolvimento contínuo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}