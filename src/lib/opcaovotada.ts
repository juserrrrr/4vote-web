import axios from 'axios';
import api from './api';

export interface OpcaoVotada {
  id_opcao: number;
  id_voto: number;
}

async function getById(id_opcao: number): Promise<OpcaoVotada | Error> {
  try {
    const { data } = await api.get('/opcaovotada/id', id_opcao);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar pegar o id de opção votada');
}

export const authService = {
  getById,
};
