import axios, { AxiosError, AxiosResponse } from 'axios';
import api, { checkErrors, headerAutorization, headerAutorizationFile } from './api';

interface UserMe {
  nome: string;
  email: string;
  cpf: string;
  URLimagem: string | null;
}

export type UpdateProfile = {
  nome: string;
  email: string;
  cpf?: string;
  image?: File;
};

interface UpdateResponse {
  nome?: string;
  email?: string;
  URLimagem?: string | null;
}

async function updateCurrentUser(data: FormData): Promise<UpdateResponse | Error> {
  try {
    const response = await api.patch('/usuarios/me', data, headerAutorizationFile());
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

interface FileUpload {
  file: File;
}

async function uploadImage(data: FileUpload): Promise<AxiosResponse | Error> {
  const formData = new FormData();
  formData.append('file', data.file);
  try {
    const response = await api.post('/upload', formData, headerAutorizationFile());
    return response;
  } catch (error) {
    return checkErrors({ error });
  }
}

export const userService = {
  findMe,
  updateCurrentUser,
  uploadImage,
};
