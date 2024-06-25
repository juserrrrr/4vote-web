import { AxiosError, AxiosResponse } from 'axios';
import api from './app';

export async function entrar(email: string, senha: string) {
  await api
    .post('/auth/entrar', { email, senha })
    .then((response: AxiosResponse) => {
      const token = response.data.accessToken;
      console.log(`Token recebido: ${token}`);

      return token;
    })
    .catch((error: AxiosError) => {
      console.log(error);

      return null;
    });
}
