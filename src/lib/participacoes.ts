import axios from 'axios';
import api, { checkErrors, headerAutorization } from './api';
import { VotoDto } from './voto';

interface ParticipacoesDto {
  voto: VotoDto;
}

export interface IParticipateDto {
  voto: {
    opcoesVotadas: { idOption: string }[];
  };
}

async function createParticipation(surveyId: string, body: IParticipateDto): Promise<any | Error> {
  try {
    const response = await api.post(`/participacoes/${surveyId}`, body, headerAutorization());
    return response.data;
  } catch (error) {
    return checkErrors({ error });
  }
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
  createParticipation,
  findOne,
};
