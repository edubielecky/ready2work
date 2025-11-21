import { HeartHandshake } from "lucide-react";

export default function SectionImpacto () {
    return (
          <section id="impacto-social" className="glass-card rounded-0 py-5 py-md-5 text-white">
            <div className="container text-center">
              <HeartHandshake size={60} className="mb-4" />
              <h2 className="display-5 fw-bold mb-3">Impacto Social Real</h2>
              <p className="lead mb-4">
                Ready2Work é mais do que tecnologia — é um compromisso com o capital humano.
              </p>
              <div className="row justify-content-center">
                <ul className="list-unstyled col-lg-8 fs-5 text-start">
                  <li className="mb-2"><span className="me-3 fw-bold">&#10003;</span> Reduz demissões em massa e a rotatividade de forma ética.</li>
                  <li className="mb-2"><span className="me-3 fw-bold">&#10003;</span> Diminui a desigualdade digital ao promover requalificação interna.</li>
                  <li className="mb-2"><span className="me-3 fw-bold">&#10003;</span> Valoriza o colaborador, retendo talentos e conhecimento da empresa.</li>
                </ul>
              </div>
            </div>
          </section>
    )
}