export default function SectionTime() {
    return (
          <section id="time" className="py-5 py-md-5 bg-dark-custom">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Nosso Time</h2>
        <p className="lead text-secondary-custom">Pessoas apaixonadas por transformar o ambiente de trabalho.</p>
      </div>
      <div className="row justify-content-center g-4">
        {[
          { name: "João Ricardo", img: "https://avatars.githubusercontent.com/u/200935676?v=4", linkedin: "https://www.linkedin.com/in/joaoricardosoc/" },
          { name: "Eduardo Bielecky", img: "https://avatars.githubusercontent.com/u/205084031?v=4", linkedin: "https://www.linkedin.com/in/bielecky/" },
          { name: "Nicolas Santos", img: "https://avatars.githubusercontent.com/u/107138521?v=4", linkedin: "https://www.linkedin.com/in/nicolas-santos-2a895a223/" },
          { name: "Caio Ribeiro", img: "https://placehold.co/100x100/A855F7/111?text=CR", linkedin: "https://www.linkedin.com/in/caio-ribeiro-523abb29b/" },
          { name: "Eduardo Vicentini", img: "https://avatars.githubusercontent.com/u/163414518?v=4", linkedin: "https://www.linkedin.com/in/eduardovicentinilevy/" },
        ].map((member, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-6 text-center">
            <a className="text-decoration-none text-white" href={member.linkedin} target="_blank">
              <img 
                src={member.img} 
                className="rounded-circle mb-3 profile-img" 
                alt={`[Foto de ${member.name}]`}
              />
              <h5 className="fw-bold mb-1">{member.name}</h5>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
    )
}