import axios, { AxiosError, AxiosResponse } from 'axios';
import { PerguntaDto } from './perguntas';
import { TagDto } from './tag';
import api from './api';

export interface PesquisaDto {
  titulo: string;
  descricao?: string;
  dataTermino: string;
  ehPublico: boolean;
  ehVotacao: boolean;
  imagemPesquisa?: FileList;
  perguntas: PerguntaDto[];
  tags?: TagDto[];
}
export interface PesquisaWarning {
  message: string;
}
export interface PesquisaResponse<T> {
  data: T | PesquisaWarning;
  statusCode: number;
}

export interface PesquisaData {
  codigo?: string;
  titulo?: string;
}
export interface findSurveyFilter {
  codigo: string;
  titulo: string;
  descricao: string;
  dataTermino: string;
  URLimagem: string;
  ehVotacao: boolean;
}

const headerAutorization = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiSm9hbyIsImlhdCI6MTcyMTA1MTIyMiwiZXhwIjoxNzIxMTM3NjIyLCJpc3MiOiJBc3NpbmF0dXJhNFZvdGUiLCJzdWIiOiIxIn0.d7U2Yz1R1YgJN8ub0GyVGKWXSJEyBLk6FfucswuhPVo`,
  },
};

async function createPesquisa(pesquisaDto: PesquisaDto): Promise<PesquisaData | Error> {
  try {
    const response = await api.post('/pesquisas', pesquisaDto, headerAutorization);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      const codeError = error.response?.status;
      if (codeError === 401) {
        return new Error('Usuário não autorizado');
      }
      if (codeError === 500) {
        return new Error('Erro interno no servidor');
      }
      if (codeError === 400) {
        return new Error('Requisição inválida');
      }
    }
    return new Error('Serviço fora do ar, tente novamente mais tarde');
  }
}

function setArquivado(id: number) {
  api
    .patch(`pesquisas/arquivar/${id}`)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

async function findFilter(): Promise<findSurveyFilter[] | Error> {
  const urlQuery = new URLSearchParams({
    arquivada: 'false',
    participo: 'false',
    criador: 'false',
    encerradas: 'false',
  });
  try {
    const response = await api.get(`/pesquisas/filtrar?${urlQuery.toString()}`, headerAutorization);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      if (codeError === 401) {
        return new Error('Usuário não autorizado');
      }
      if (codeError === 500) {
        return new Error('Erro interno no servidor');
      }
      if (codeError === 400) {
        return new Error('Requisição inválida');
      }
    }
    return new Error('Serviço fora do ar, tente novamente mais tarde');
  }
}

export const surveyService = {
  setArquivado,
  findFilter,
  createPesquisa,
};
