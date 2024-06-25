import axios from 'axios';
import api from './api';

interface ILogin {
  accessToken: string;
}

async function entrar(email: string, senha: string): Promise<ILogin | Error> {
  try {
    const { data } = await api.post('/auth/entrar', { email, senha });
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Error(error.response?.data.message);
    }
  }
  return Error('Erro ao tentar efetuar o login');
}

export const authService = {
  entrar,
};
