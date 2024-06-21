import { AxiosError, AxiosResponse } from 'axios';
import api from './app';

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

export function createPesquisa() {
  const pesquisa = {
    titulo: 'Título Teste',
    codigo: '12sj8822df2',
    dataCriacao: new Date('2001-08-12').toISOString(),
    dataTermino: new Date('2006-12-24').toISOString(),
    ehPublico: true,
    criador: 1,
    arquivado: false,
    ehVotacao: true,
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
