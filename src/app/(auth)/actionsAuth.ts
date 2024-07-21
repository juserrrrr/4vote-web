'use server';
import { authService, ICadastroDto, ILoginDto } from '@/lib/auth';
import { sessionService } from '@/lib/sessions';

interface formResponse {
  token?: string;
  error?: {
    message: string;
  };
}

export async function onSubmitLogin(data: FormData): Promise<formResponse> {
  const values = Object.fromEntries(data.entries());
  const formValues: ILoginDto = {
    email: values.email as string,
    senha: values.senha as string,
  };
  const response = await authService.entrar(formValues);
  if (response instanceof Error) {
    return { error: { message: response.message } };
  }
  sessionService.createSessionToken(response.accessToken);
  return { token: response.accessToken };
}

export async function onSubmitRegister(data: FormData): Promise<formResponse> {
  const values = Object.fromEntries(data.entries());
  const formValues: ICadastroDto = {
    nome: values.nome as string,
    email: values.email as string,
    senha: values.senha as string,
    cpf: values.cpf as string,
  };
  const response = await authService.cadastrar(formValues);
  if (response instanceof Error) {
    return { error: { message: response.message } };
  }
  sessionService.createSessionToken(response.accessToken);
  return { token: response.accessToken };
}

export async function onSubmitRecoverPassword(data: FormData): Promise<formResponse> {
  const values = Object.fromEntries(data.entries());
  const response = await authService.recoverPassword(values.email as string);
  if (response instanceof Error) {
    return { error: { message: response.message } };
  }
  return {};
}
