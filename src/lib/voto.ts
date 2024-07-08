import axios from 'axios';
import api from './api';
import { OpcaoVotadaDto } from './opcaovotada';

export interface VotoDto {
  id: number;
  opcoesVotadas: OpcaoVotadaDto[];
}

async function getById(id: number): Promise<VotoDto | Error> {
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

export const voteService = {
  getById,
};
