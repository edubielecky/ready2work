import { Code, Zap, LayoutGrid } from "lucide-react";

export default function SectionTecnologias() {
    return (
          <section id="tecnologias" className="py-5 py-md-5 bg-dark-custom">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Tecnologia de Ponta</h2>
                <p className="lead text-secondary-custom">Construído com um stack robusto e escalável para suportar o crescimento da sua empresa.</p>
              </div>
              <div className="row g-4">
                {/* Frontend */}
                <div className="col-lg-4">
                  <div className="card card-custom p-4 h-100">
                    <Code className="text-primary-custom mb-3" size={32} />
                    <h5 className="fw-bold text-white">Frontend & Visualização</h5>
                    <ul className="list-unstyled mt-3 text-secondary-custom">
                      <li className="text-white mb-1">&bull; <span className="fw-bold">React:</span> Interface moderna e reativa.</li>
                      <li className="text-white mb-1">&bull; <span className="fw-bold">Bootstrap:</span> Design responsivo e profissional.</li>
                      <li className="text-white mb-1">&bull; <span className="fw-bold">Chart.js:</span> Dashboards interativos e gamificação.</li>
                    </ul>
                  </div>
                </div>
                {/* Backend & IA */}
                <div className="col-lg-4">
                  <div className="card card-custom p-4 h-100">
                    <Zap className="text-primary-custom mb-3" size={32} />
                    <h5 className="fw-bold text-white">Backend & Inteligência</h5>
                    <ul className="list-unstyled mt-3 text-secondary-custom">
                      <li className="text-white mb-1">&bull; <span className="fw-bold">Python/FastAPI:</span> API de alta performance.</li>
                      <li className="text-white mb-1">&bull; <span className="fw-bold">Pandas/Scikit-Learn:</span> Motor de recomendação com pesos.</li>
                      <li className="text-white mb-1">&bull; <span className="fw-bold">APIs de Aprendizado:</span> Integração com Alura, Coursera, Udemy.</li>
                    </ul>
                  </div>
                </div>
                {/* Banco & Estrutura */}
                <div className="col-lg-4">
                  <div className="card card-custom p-4 h-100">
                    <LayoutGrid className="text-primary-custom mb-3" size={32} />
                    <h5 className="fw-bold text-white">Banco de Dados & Dados</h5>
                    <ul className="list-unstyled mt-3 text-secondary-custom">
                      <li className="text-white mb-1">&bull; <span className="fw-bold">PostgreSQL:</span> Base de dados relacional e robusta.</li>
                      <li className="text-white mb-1">&bull; <span className="fw-bold">JSON:</span> Flexibilidade para dados de skills e perfis.</li>
                      <li className="text-white mb-1">&bull; <span className="fw-bold">Modelagem:</span> IA baseada em compatibilidade e trilhas.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}