import axios from 'axios';
import api from './api';

interface Opcao {
  id: number;
  pergunta_id: number;
  texto: string;
  quantVotos: number;
}

async function getById(id: number): Promise<Error> {
  try {
    const { data } = await api.get('/opcoes/id', id);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar pegar o id de opção');
}

export const authService = {
  getById,
};
