import { AxiosError, AxiosResponse } from 'axios';
import api from './api';

interface Opcao {
  id: number;
  pergunta_id: number;
  texto: string;
  quantVotos: number;
}

export function findAllOpcao(): Promise<boolean> {
  return api
    .get('opcoes')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function createOpcao(opcao: Opcao): Promise<boolean> {
  return api
    .post('opcoes', opcao)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function deleteOpcao(id: number, opcao: Opcao): Promise<boolean> {
  return api
    .delete(`opcoes/${id}`, opcao)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}
