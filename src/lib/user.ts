import axios, { AxiosError, AxiosResponse } from 'axios';
import api, { headerAutorization } from './api';

interface UserMe {
  nome: string;
  email: string;
  cpf: string;
  URLPerfil: string | null;
}

export type UpdateProfile = Partial<Omit<UserMe, 'cpf'>>;

async function updateCurrentUser(data: UpdateProfile): Promise<any | Error> {
  try {
    const response = await api.patch('/usuarios/me', data, headerAutorization());
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      if (codeError === 401) {
        return new Error('Usuário não autorizado');
      }
      if (codeError === 500) {
        return new Error('Erro interno no servidor');
      }
      if (codeError === 400) {
        return new Error('Requisição inválida');
      }
    }
    return new Error('Serviço fora do ar');
  }
}

async function findMe(): Promise<UserMe | Error> {
  try {
    const response = await api.get('/usuarios/me', headerAutorization());
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      if (codeError === 401) {
        return new Error('Usuário não autorizado');
      }
      if (codeError === 500) {
        return new Error('Erro interno no servidor');
      }
      if (codeError === 400) {
        return new Error('Requisição inválida');
      }
    }
    return new Error('Serviço fora do ar');
  }
}

export const userService = {
  findMe,
  updateCurrentUser,
};
