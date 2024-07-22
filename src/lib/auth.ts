import api, { checkErrors } from './api';

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
    return checkErrors({
      error,
      message400: 'Email ou senha inválidos',
      message401: 'Conta ainda não foi ativada, cheque seu email',
    });
  }
}

async function cadastrar(dto: ICadastroDto): Promise<IToken | Error> {
  try {
    const response = await api.post('/auth/cadastro', dto);
    return response.data;
  } catch (error) {
    return checkErrors({ error });
  }
}

async function recoverPassword(email: string): Promise<void | Error> {
  try {
    const response = await api.post('/auth/recuperar-senha', { email: email });
    return response.data;
  } catch (error) {
    return checkErrors({ error });
  }
}
async function validateUser(codeVal: string): Promise<void | Error> {
  try {
    const response = await api.post(`/auth/validar-usuario/${codeVal}`);
    return response.data;
  } catch (error) {
    return checkErrors({ error });
  }
}

export const authService = {
  entrar,
  cadastrar,
  recoverPassword,
  validateUser,
};
