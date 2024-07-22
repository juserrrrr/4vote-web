import axios, { AxiosError, AxiosResponse } from 'axios';
import { PerguntaDto, PerguntaDtoResultado } from './perguntas';
import { TagDto } from './tag';
import api, { headerAutorization } from './api';

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

export interface PesquisaDtoTemp {
  titulo: string;
  descricao?: string;
  dataTermino: string;
  ehPublico: boolean;
  URLimagem?: string;
  ehVotacao: boolean;
  perguntas: [{ texto: string; opcoes: string[] }];
}

export interface PesquisaDtoResultado {
  titulo: string;
  descricao?: string;
  dataTermino: string;
  ehPublico: boolean;
  URLimagem?: string;
  ehVotacao: boolean;
  perguntas: PerguntaDtoResultado[];
}

export interface PesquisaWarning {
  message: string;
}
export interface PesquisaResponse<T> {
  data: T | PesquisaWarning;
  statusCode: number;
}

export interface PesquisaDtoTemp {
  titulo: string;
  descricao?: string;
  dataTermino: string;
  ehPublico: boolean;
  URLimagem?: string;
  ehVotacao: boolean;
  perguntas: [{ texto: string; opcoes: string[] }];
}

export interface PesquisaData {
  codigo?: string;
  titulo?: string;
}
export interface findSurveyFilter {
  codigo: string;
  titulo: string;
  criador: string;
  descricao: string;
  dataTermino: string;
  URLimagem: string;
  ehVotacao: boolean;
  tags: string[];
}

async function createPesquisa(pesquisaDto: PesquisaDto): Promise<PesquisaData | Error> {
  try {
    const response = await api.post('/pesquisas', pesquisaDto, headerAutorization());
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
    return new Error('Serviço fora do ar');
  }
}

async function getVotes(code: string): Promise<PerguntaDtoResultado[] | Error> {
  try {
    const { data } = await api.get(`/pesquisas/resultados/${code}`, headerAutorization());
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error(`Erro ao tentar pegar a pesquisa de código ${code}`);
}

async function getByCode(code: string): Promise<PesquisaDtoTemp[] | Error> {
  try {
    const { data } = await api.get(`/pesquisas/procurar/${code}`, headerAutorization());
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error(`Erro ao tentar pegar a pesquisa de código ${code}`);
}

async function getAllCodes(): Promise<{ code: string }[] | Error> {
  try {
    const { data } = await api.get('/pesquisas/codigos', headerAutorization());
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message || 'Erro de requisição Axios');
    }
    return new Error('Erro desconhecido: ' + ((error as Error).message || (error as Error).toString()));
  }
}

function setArquivado(id: number) {
  api
    .patch(`pesquisas/arquivar/${id}`)
    .then((response: AxiosResponse) => {
      return true;
    })
    .catch((error: AxiosError) => {
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
    const response = await api.get(`/pesquisas/filtrar?${urlQuery.toString()}`, headerAutorization());
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
    return new Error('Serviço fora do ar');
  }
}

export const surveyService = {
  setArquivado,
  findFilter,
  createPesquisa,
  getByCode,
  getAllCodes,
  getVotes,
};
