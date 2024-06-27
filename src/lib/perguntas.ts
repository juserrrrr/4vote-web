import { AxiosError, AxiosResponse } from 'axios';
import api from './api';

interface Perguntas {
  texto: string;
  URLimagem?: string;
  pesquisa_id: number;
}

export function findAllPerguntas(): Promise<boolean> {
  return api
    .get('perguntas')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function deletePerguntas(pesquisa_id: number): Promise<boolean> {
  return api
    .delete('perguntas/${id}')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function createPerguntas(perguntas: Perguntas): Promise<boolean> {
  return api
    .post('perguntas', perguntas)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}
