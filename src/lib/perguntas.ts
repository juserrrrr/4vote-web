import axios from 'axios';
import api from './api';

interface Perguntas {
  texto: string;
  URLimagem?: string;
  pesquisa_id: number;
}

async function getById(pesquisa_id: number): Promise<Error> {
  try {
    const { data } = await api.get('/perguntas/id', pesquisa_id);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar efetuar pegar o id de pergunta');
}

export const authService = {
  getById,
};
