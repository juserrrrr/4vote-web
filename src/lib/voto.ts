import { AxiosError, AxiosResponse } from 'axios';
import api from './api';

interface Voto {
  id: number;
  data: string;
  hash: string;
}

export function findAllVoto(): Promise<boolean> {
  return api
    .get('voto')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function createVoto(voto: Voto): Promise<boolean> {
  return api
    .post('voto', voto)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}
