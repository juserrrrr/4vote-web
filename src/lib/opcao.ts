import axios from 'axios';
import api from './api';

export interface OpcaoDto {
  texto: string;
  imagemOpcao?: FileList;
}

export interface OpcaoDtoResultado {
  textoOpcao: string;
  quantVotos: number;
  porcentagem: number;
  opcaoMaisVotada: boolean;
  URLimagem?: string;
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

export const optionService = {
  getById,
};
