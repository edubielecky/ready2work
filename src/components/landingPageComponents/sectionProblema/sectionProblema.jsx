import { Zap } from "lucide-react"

export default function SectionProblema() {
    return (
          <section id="problema" className="py-5 py-md-5 bg-dark-custom">
            <div className="container">
              <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-8">
                  <h2 className="display-5 fw-bold mb-3">Por que o Ready2Work existe?</h2>
                  <p className="lead text-secondary-custom">Resolvemos as dores que as lideranças e o RH enfrentam todos os dias na gestão de talentos internos.</p>
                </div>
              </div>
              <div className="row">
                {/* Lista de Dores */}
                <div className="col-lg-6 mb-4">
                  <ul className="list-unstyled">
                    {[
                      "Falta de processo formal para movimentações internas",
                      "Resistência de gestores em liberar colaboradores",
                      "Ausência de clareza e transparência no processo",
                      "Matching subjetivo entre pessoas e vagas",
                      "Funcionários desmotivados e sem trilha de crescimento"
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-start mb-3">
                        <Zap className="text-primary-custom me-3 mt-1" size={20} />
                        <span className="fs-5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Bloco Destacado (usando o Glass Card para destaque) */}
                <div className="col-lg-6">
                  <div className="card card-custom p-4 h-100 shadow-lg">
                    <div className="card-body">
                      <h3 className="card-title fw-bold text-primary-custom mb-3">O Fato Crucial</h3>
                      <blockquote className="blockquote fs-5 text-white">
                        <p>"Em entrevistas com gestores, descobrimos que <span className="fw-bold">70% não sabem</span> quem dentro da empresa possui as habilidades para preencher vagas abertas."</p>
                      </blockquote>
                      <footer className="blockquote-footer text-secondary-custom mt-3">Insight da Pesquisa de Campo Ready2Work</footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}