'use server';
import { authService, ILoginDto } from '@/lib/auth';
import { sessionService } from '@/lib/sessions';
import { cookies } from 'next/headers';

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
