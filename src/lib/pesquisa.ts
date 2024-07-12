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

interface PesquisaData {
  codigo?: string;
  titulo?: string;
  message?: string;
}

export interface PesquisaResponse {
  data: PesquisaData;
  statusCode: number;
}

const headerAutorization = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiSm9hbyIsImlhdCI6MTcyMDU3Nzg3NywiZXhwIjoxNzIwNjY0Mjc3LCJpc3MiOiJBc3NpbmF0dXJhNFZvdGUiLCJzdWIiOiIxIn0.cvJbZ0BZgxgUCLqdwVthlh1DFd1xHSgGM-w4auTiqQU`,
  },
};

// function DateToISOString(pesquisa: PesquisaDto): { dataTermino: string } {
//   return {
//     dataTermino: pesquisa.dataTermino.toISOString(),
//   };
// }

async function createPesquisa(pesquisaDto: PesquisaDto): Promise<PesquisaResponse> {
  try {
    const response = await api.post('/pesquisas', pesquisaDto, headerAutorization);
    return { data: response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      if (codeError === 401) {
        return { data: { message: 'Usuário não autorizado' }, statusCode: 401 };
      }
      if (codeError === 500) {
        return { data: { message: 'Erro interno no servidor' }, statusCode: 500 };
      }
      if (codeError === 400) {
        return { data: { message: 'Requisição inválida' }, statusCode: 400 };
      }
    }
    return { data: { message: 'Serviço fora do ar, tente novamente mais tarde' }, statusCode: 503 };
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
