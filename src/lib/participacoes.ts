import axios from 'axios';
import api from './api';
import { VotoDto } from './voto';

interface ParticipacoesDto {
  voto: VotoDto;
}

async function createParticipacao(participacao: ParticipacoesDto): Promise<Error> {
  try {
    const { data } = await api.post('participacoes', participacao);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar criar participação');
}

async function findOne(participacao: ParticipacoesDto): Promise<Error> {
  try {
    const { data } = await api.get('participacoes', participacao);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar achar uma participação');
}

export const participationService = {
  createParticipacao,
  findOne,
};
