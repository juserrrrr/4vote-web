import axios from 'axios';
import api from './api';

interface TagPesquisa {
  tag_id: number;
  pesquisa_id: number;
}

async function getByPesquisa(pesquisa_id: number): Promise<TagPesquisa | Error> {
  try {
    const { data } = await api.get('/tagpesquisa/pesquisa_id', pesquisa_id);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar pegar o id de tagpesquisa por pesquisa');
}

export const authService = {
  getByPesquisa,
};
