import axios from 'axios';
import api from './api';

interface IToken {
  accessToken: string;
}

interface ICadastroDto {
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
      console.log(error.response?.data);
      const codeError = error.response?.status;
      if (codeError === 401) {
        return new Error('Usuário não autorizado, ative sua conta');
      }
      if (codeError === 500) {
        return new Error('Erro interno no servidor');
      }
      if (codeError === 400) {
        return new Error('Usuário ou senha inválidos');
      }
    }
    return new Error('Serviço fora do ar');
  }
}

async function cadastrar(dto: ICadastroDto): Promise<IToken | Error> {
  try {
    const { data } = await api.post('/auth/cadastro', dto);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar efetuar o cadastro');
}

export const authService = {
  entrar,
  cadastrar,
};
