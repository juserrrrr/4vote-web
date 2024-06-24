import { AxiosError, AxiosResponse } from 'axios';
import api from './app';

interface Pesquisa {
  titulo: string;
  codigo: string;
  dataCriacao: Date;
  dataTermino: Date;
  ehPublico: boolean;
  descricao?: string;
  criador: number;
  arquivado: boolean;
  URLimagem?: string;
  ehVotacao: boolean;
}

function DateToISOString(pesquisa: Pesquisa): { dataCriacao: string; dataTermino: string } {
  return {
    dataCriacao: pesquisa.dataCriacao.toISOString(),
    dataTermino: pesquisa.dataTermino.toISOString(),
  };
}

export function setArquivado(id: number) {
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

export function findAllPesquisas() {
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

export function createPesquisa(pesquisa: Pesquisa) {
  const pesquisaComDatasISO = {
    ...pesquisa,
    ...DateToISOString(pesquisa),
  };

  api
    .post('pesquisas', pesquisa)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function deletePesquisa(id: number) {
  api
    .delete(`pesquisas/${id}`)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}
