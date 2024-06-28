import axios from 'axios';
import api from './api';
import { Voto } from './voto';
import { OpcaoVotada } from './opcaovotada';

interface Participacoes {
  usuario_id: number;
  pesquisa_id: number;
  voto: Voto;
  opcaovotada: OpcaoVotada;
}

async function createParticipacao(participacao: Participacoes): Promise<Error> {
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

async function createVoto(participacao: Participacoes, voto: Voto): Promise<Error> {
  try {
    const { data } = await api.post('participacoes/criarvoto', { participacao, voto });
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar criar voto a partir de participação');
}

async function createOpcaoVotada(participacao: Participacoes, opcaovotada: OpcaoVotada): Promise<Error> {
  try {
    const { data } = await api.post('participacoes/criaropcaovotada', { participacao, opcaovotada });
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar criar opção votada a partir de participação');
}

async function findOne(participacao: Participacoes): Promise<Error> {
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

export const authService = {
  createParticipacao,
  createVoto,
  createOpcaoVotada,
  findOne,
};
