import { sessionService } from './sessions';

const axios = require('axios');

export const headerAutorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${sessionService.getSessionToken()}`,
    },
  };
};

export const headerAutorizationFile = () => {
  return {
    headers: {
      Authorization: `Bearer ${sessionService.getSessionToken()}`,
      'Content-Type': 'multipart/form-data',
    },
  };
};

interface IError {
  error: any;
  message401?: string;
  message500?: string;
  message400?: string;
  message404?: string;
}

export const checkErrors = ({
  error,
  message401 = 'Sem autorização',
  message500 = 'Erro interno no servidor',
  message400 = 'Valores inválidos',
  message404 = 'Não foi possível encontrar o recurso',
}: IError) => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return new Error('Servidor fora do ar');
    }
    const codeError = error.response?.status;
    switch (codeError) {
      case 401:
        return new Error(message401);
      case 500:
        return new Error(message500);
      case 400:
        return new Error(message400);
      case 404:
        return new Error(message404);
      default:
        return new Error(error.response?.data.message);
    }
  }
  return new Error('Erro desconhecido, tente novamente mais tarde');
};

const api = axios.create({
  baseURL: process.env.URL_API,
  withCredentials: true,
  timeout: '20000',
});

export default api;
