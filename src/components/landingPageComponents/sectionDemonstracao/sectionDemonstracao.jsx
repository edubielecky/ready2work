export default function SectionDemonstracao() {
    return (
            <section id="demonstracao" className="py-5 py-md-5 bg-dark-custom">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3">Veja o Ready2Work em Ação</h2>
                <p className="lead text-secondary-custom">Interface moderna e focada em experiência para Gestores, RH e Colaboradores.</p>
            </div>
            <div className="row g-4">
                {/* Print Grande - Dashboard Principal */}
                <div className="col-12 col-lg-8">
                    <div className="card card-custom p-3 h-100">
                        <img 
                            src="src\assets\images\telaDashboardGestor.png" 
                            className="img-fluid rounded-lg" 
                            alt="[Visão de alto nível do RH com métricas de requalificação]" 
                        />
                        <small className="text-center mt-3 text-secondary-custom text-white">Dashboard do RH: Visão completa de métricas e realocação de talentos.</small>
                    </div>
                </div>
                {/* Prints Menores - Lateral */}
                <div className="col-12 col-lg-4">
                    <div className="row g-4 h-100">
                        <div className="col-sm-6 col-lg-12">
                            <div className="card card-custom p-3 h-100">
                                <img 
                                    src="https://placehold.co/600x300/1C1B33/F0F0FF?text=Tela+de+Cadastro+de+Skills" 
                                    className="img-fluid rounded-lg" 
                                    alt="[Tela de cadastro de habilidades do colaborador]" 
                                />
                                <small className="text-center mt-3 text-secondary-custom text-white">Tela de Cadastro de Skills</small>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="card card-custom p-3 h-100">
                                <img 
                                    src="https://placehold.co/600x300/1C1B33/4CAF50?text=Workflow+de+Aprovação" 
                                    className="img-fluid rounded-lg" 
                                    alt="[Tela do workflow de movimentação interna com status]" 
                                />
                                <small className="text-center mt-3 text-secondary-custom text-white">Workflow de Aprovação e Status</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}