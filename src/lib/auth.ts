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

async function entrar(email: string, senha: string): Promise<IToken | Error> {
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

async function cadastrar(dto: ICadastroDto): Promise<IToken | Error> {
  try {
    const { data } = await api.post('/auth/cadastro', dto);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Error(error.response?.data.message);
    }
  }
  return Error('Erro ao tentar efetuar o cadastro');
}

export const authService = {
  entrar,
  cadastrar,
};
