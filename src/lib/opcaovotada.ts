import { AxiosError, AxiosResponse } from 'axios';
import api from './api';

interface OpcaoVotada {
  id_opcao: number;
  id_voto: number;
}

export function findAllOpcaoVotada(): Promise<boolean> {
  return api
    .get('opcaovotada')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function createOpcao(opcaovotada: OpcaoVotada): Promise<boolean> {
  return api
    .post('opcaovotada', opcaovotada)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function findById(opcao_id: number): Promise<OpcaoVotada | null> {
  return api
    .get(`opcaovotada/${opcao_id}`)
    .then((response: AxiosResponse<OpcaoVotada>) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return null;
    });
}
