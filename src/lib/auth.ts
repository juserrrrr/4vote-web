import axios from 'axios';
import api, { checkError } from './api';

interface IToken {
  accessToken: string;
}

export interface ICadastroDto {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
}

export interface ILoginDto {
  email: string;
  senha: string;
}

async function entrar(loginDto: ILoginDto): Promise<IToken | Error> {
  try {
    const response = await api.post('/auth/entrar', loginDto);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      switch (codeError) {
        case 401:
          return new Error('Usuário não autorizado, ative sua conta');
        case 500:
          return new Error('Erro interno no servidor');
        case 400:
          return new Error('Usuário ou senha inválidos');
        case 404:
          return new Error('Usuário não encontrado');
        default:
          return new Error(error.response?.data.message);
      }
    }
    return new Error('Serviço fora do ar');
  }
}

async function cadastrar(dto: ICadastroDto): Promise<IToken | Error> {
  try {
    const response = await api.post('/auth/cadastro', dto);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      switch (codeError) {
        case 401:
          return new Error('Usuário não autorizado, ative sua conta');
        case 500:
          return new Error('Erro interno no servidor');
        case 400:
          return new Error('Usuário ou senha inválidos');
        case 404:
          return new Error('Usuário não encontrado');
        default:
          return new Error(error.response?.data.message);
      }
    }
    return new Error('Serviço fora do ar');
  }
}

async function recoverPassword(email: string): Promise<void | Error> {
  try {
    const response = await api.post('/auth/recuperar-senha', { email: email });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const codeError = error.response?.status;
      switch (codeError) {
        case 401:
          return new Error('Usuário não autorizado, ative sua conta');
        case 500:
          return new Error('Erro interno no servidor');
        case 400:
          return new Error('Usuário ou senha inválidos');
        case 404:
          return new Error('Usuário não encontrado');
        default:
          return new Error(error.response?.data.message);
      }
    }
    return new Error('Serviço fora do ar');
  }
}

export const authService = {
  entrar,
  cadastrar,
  recoverPassword,
};
