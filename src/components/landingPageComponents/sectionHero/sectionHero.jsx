import { Link } from "react-router-dom";

export default function SectionHero() {
    return (
      <section id="hero" className="hero-section bg-dark-custom position-relative py-5 py-md-5">
          <div className="container position-relative z-1">
          <div className="row align-items-center">
        {/* Conteúdo Esquerdo */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <span className="badge rounded-pill bg-primary-custom text-white mb-3 p-2 fw-semibold">#FuturoDoTrabalho</span>
          <h1 className="display-3 fw-bolder mb-3">
            Requalificação sem demissão.<br />Mobilidade interna <span className="text-primary-custom">inteligente.</span>
          </h1>
          <p className="lead mt-3 text-secondary-custom">
            A plataforma que conecta talentos às vagas internas certas — usando dados, IA e um fluxo transparente para fortalecer empresas e pessoas.
          </p>
          <div className="mt-4 d-flex">
            <Link to="/login" className="btn btn-outline-light btn-primary-custom btn-lg me-3">Quero conhecer</Link>
            <a href="#problema" className="btn btn-outline-light-custom btn-lg">Entenda o problema</a>
          </div>
        </div>
        {/* Mockup (simulando a dashboard) */}
        <div className="container col-lg-6">
          <div className="card card-custom p-4 shadow-lg">
            <img 
              src="src\assets\images\telaDashboardGestor.png" 
              className="img-fluid rounded-lg mb-2"
              alt="[Mockup da tela principal da plataforma Ready2Work]" 
            />
            <small className="text-center text-white">Visão do gestor: Dashboard com informações gerais.</small>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}