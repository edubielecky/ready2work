import React from 'react';
import './DirectorProfilePage.css'; // Usaremos um CSS para estilizar o avatar

const DirectorProfilePage = () => {
  // Dados fictícios para o diretor
  const directorProfile = {
    name: 'Juliana Silva',
    title: 'Chief Executive Officer (CEO)',
    email: 'diretor@ready2work.com',
    phone: '+55 (11) 99999-8888',
    avatarUrl: 'https://i.pravatar.cc/150?u=director', // Placeholder avatar
    departmentsManaged: 5,
    totalEmployees: 98,
  };

  return (
    <main className="container mt-4">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-2">Meu Perfil</h1>
        <p className="fs-5 text-light opacity-75">Gerencie suas informações e configurações.</p>
      </div>

      <div className="row justify-content-center g-4">
        {/* Coluna do Perfil */}
        <div className="col-lg-4">
          <div className="glass-card p-4 text-center h-100">
            <img src={directorProfile.avatarUrl} alt="Foto do Diretor" className="profile-avatar mb-3" />
            <h2 className="h4">{directorProfile.name}</h2>
            <p className="text-primary fw-bold">{directorProfile.title}</p>
            <hr className="profile-hr" />
            <div className="d-flex justify-content-around mt-3">
              <div>
                <p className="h3 fw-bold mb-0">{directorProfile.departmentsManaged}</p>
                <small className="text-light opacity-75">Departamentos</small>
              </div>
              <div>
                <p className="h3 fw-bold mb-0">{directorProfile.totalEmployees}</p>
                <small className="text-light opacity-75">Colaboradores</small>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna de Informações e Configurações */}
        <div className="col-lg-7">
          {/* Informações Pessoais */}
          <div className="glass-card p-4 mb-4">
            <h3 className="h5 mb-3">Informações de Contato</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><strong>Email:</strong> {directorProfile.email}</li>
              <li><strong>Telefone:</strong> {directorProfile.phone}</li>
            </ul>
            <button className="btn btn-sm btn-outline-light mt-2">Editar Informações</button>
          </div>

          {/* Segurança */}
          <div className="glass-card p-4 mb-4">
            <h3 className="h5 mb-3">Segurança</h3>
            <button className="btn btn-sm btn-outline-light">Alterar Senha</button>
          </div>

          {/* Configurações de Notificação */}
          <div className="glass-card p-4">
            <h3 className="h5 mb-3">Notificações</h3>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="emailNotif" defaultChecked />
              <label className="form-check-label" htmlFor="emailNotif">Receber resumos semanais por email</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="pushNotif" />
              <label className="form-check-label" htmlFor="pushNotif">Habilitar notificações push para alertas críticos</label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DirectorProfilePage;