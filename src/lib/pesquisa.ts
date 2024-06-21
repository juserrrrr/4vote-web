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
    codigo: '12sj8822dfe',
    dataCriacao: '',
    dataTermino: '',
    ehPublico: true,
    criador: 1,
    arquivado: false,
    ehVotacao: true,
  };

  api
    .create('pesquisas', pesquisa)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}
