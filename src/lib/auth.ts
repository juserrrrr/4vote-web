import { AxiosError, AxiosResponse } from 'axios';
import api from './app';

const data = { email: 'joao.silva@gmail.com', password: 'senha552' };

export function entrar() {
  api
    .post('/auth/entrar', data)
    .then((response: AxiosResponse) => {
      console.log(response.data);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
}
