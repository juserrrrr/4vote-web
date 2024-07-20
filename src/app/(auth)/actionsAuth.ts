'use server';
import { authService, ILoginDto } from '@/lib/auth';
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
  cookies().set('token', response.accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 1,
    path: '/',
  });
  return { token: response.accessToken };
}
