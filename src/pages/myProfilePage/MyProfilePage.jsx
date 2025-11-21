import React, { useState } from 'react';
import './MyProfilePage.css';

// Dados fictícios do perfil do gestor
const initialManagerProfile = {
  name: 'Gestor Exemplo',
  role: 'Gerente de Projetos',
  email: 'gestor.exemplo@ready2work.com',
  joinDate: '15/03/2020',
  teamSize: 8,
  activeProjects: 3,
};

const MyProfilePage = () => {
  const [profile, setProfile] = useState(initialManagerProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenEditModal = () => {
    setEditData({ ...profile }); // Clona o perfil atual para o formulário de edição
    setIsEditing(true);
  };

  const handleCloseEditModal = () => {
    setIsEditing(false);
    setEditData(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setProfile(editData); // Atualiza o perfil com os dados editados
    handleCloseEditModal();
  };

  return (
    <>
      <div className="container mt-4">
        <div className="glass-card profile-header">
          <button className="btn btn-sm btn-outline-light btn-edit" onClick={handleOpenEditModal}>Editar Perfil</button>
          <div className="profile-avatar">{profile.name.charAt(0)}</div>
          <h2 className='fs-3'>{profile.name}</h2>
          <p className="text-light opacity-75">{profile.role}</p>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-lg-12">
            <div className="glass-card p-4" style={{'--card-index': 1}}>
              <h3 className="card-title" style={{fontSize: '1.2rem'}}>Informações Pessoais</h3>
              <ul className="info-list">
                <li>
                  <span className="info-label">Email</span>
                  <span className="info-value text-light">{profile.email}</span>
                </li>
                <li>
                  <span className="info-label">Data de Admissão</span>
                  <span className="info-value text-light">{profile.joinDate}</span>
                </li>
                <li>
                  <span className="info-label">Tamanho da Equipe</span>
                  <span className="info-value text-light">{profile.teamSize} membros</span>
                </li>
                <li>
                  <span className="info-label">Projetos Ativos</span>
                  <span className="info-value text-light">{profile.activeProjects}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Edição de Perfil */}
      {isEditing && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content glass-card">
              <form onSubmit={handleSaveChanges} className="edit-form">
                <div className="modal-header border-0">
                  <h5 className="modal-title card-title" style={{borderBottom: 'none', marginBottom: 0}}>Editar Perfil</h5>
                  <button type="button" className="btn-close btn-close-white" onClick={handleCloseEditModal}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label info-label">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" value={editData.name} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label info-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={editData.email} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-outline-light" onClick={handleCloseEditModal}>Cancelar</button>
                  <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;