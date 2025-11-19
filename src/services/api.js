import axios from 'axios';

// URL base do nosso backend Flask
const API_URL = 'http://localhost:5000/api';

/**
 * Função que busca as inscrições do usuário.
 * @param {number} userId - O ID do usuário para buscar as inscrições.
 */
export const getMyApplications = async (userId) => {
  try {
    // Busca as inscrições do colaborador com o ID fornecido
    const response = await axios.get(`${API_URL}/applications/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar inscrições do colaborador ${userId}:`, error);
    // Em caso de erro, retorna um array vazio para não quebrar a UI
    return [];
  }
};

/**
 * Busca os dados de um perfil de colaborador específico.
 * @param {number} userId - O ID do usuário a ser buscado.
 */
export const getCollaboratorProfile = async (userId) => {
  try {
    // Faz a chamada GET para o endpoint do Flask
    const response = await axios.get(`${API_URL}/colaboradores/${userId}`);
    return response.data;
  } catch (error) {
    // Trata o erro de forma elegante
    console.error(`Erro ao buscar perfil do colaborador ${userId}:`, error);
    // Se o backend falhar, podemos retornar um perfil mock como fallback
    // para que a aplicação não quebre totalmente durante o desenvolvimento.
    if (error.response && error.response.status === 404) {
      throw new Error('Perfil não encontrado.');
    }
    throw new Error('Não foi possível conectar ao servidor.');
  }
};

/**
 * Busca os dados de um perfil de gestor específico.
 * @param {number} userId - O ID do gestor a ser buscado.
 */
export const getManagerProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/gestores/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar perfil do gestor ${userId}:`, error);
    if (error.response && error.response.status === 404) {
      throw new Error('Perfil de gestor não encontrado.');
    }
    throw new Error('Não foi possível conectar ao servidor.');
  }
};
