import axios from 'axios';
import api from './api';

export interface OpcaoVotadaDto {
  id_opcao: number;
}

async function getById(idVote: number): Promise<OpcaoVotadaDto | Error> {
  try {
    const { data } = await api.get('/opcaoVotada', idVote);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar pegar o id de opção votada');
}

export const optionVotedervice = {
  getById,
};
