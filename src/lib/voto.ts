import axios from 'axios';
import api from './api';

export interface Voto {
  id: number;
  data: string;
  hash: string;
}

async function getById(id: number): Promise<Voto | Error> {
  try {
    const { data } = await api.get('/voto/id', id);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar pegar o id de voto');
}

export const authService = {
  getById,
};
