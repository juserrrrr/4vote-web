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
  perguntas: PerguntaDto[];
  tags?: TagDto[];
}

export interface PesquisaResponse {
  codigo?: string;
  titulo?: string;
}

const headerAutorization = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiSm9hbyIsImlhdCI6MTcyMDQ2MzA1MiwiZXhwIjoxNzIwNTQ5NDUyLCJpc3MiOiJBc3NpbmF0dXJhNFZvdGUiLCJzdWIiOiIyIn0.g6yjqFHMpEt8agKVqJ2IW6LzQxBK3iimeISyrHBecK0`,
  },
};

// function DateToISOString(pesquisa: PesquisaDto): { dataTermino: string } {
//   return {
//     dataTermino: pesquisa.dataTermino.toISOString(),
//   };
// }

async function createPesquisa(pesquisaDto: PesquisaDto): Promise<PesquisaResponse | Error> {
  try {
    const { data } = await api.post('/pesquisas', pesquisaDto, headerAutorization);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
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

function findAllPesquisas() {
  api
    .get('pesquisas')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export const surveyService = {
  setArquivado,
  findAllPesquisas,
  createPesquisa,
};
