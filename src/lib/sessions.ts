import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

interface jwtData {
  nome: string;
  iat: number;
  exp: number;
  iss: string;
  sub: string;
}

function createSessionToken(value: string) {
  cookies().set('token', value, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 1,
    path: '/',
  });
}

function deleteSessionToken() {
  cookies().delete('token');
}

function getSessionToken() {
  return cookies().get('token')?.value;
}

export const sessionService = {
  createSessionToken,
  deleteSessionToken,
  getSessionToken,
};

export const getDataFromSession = (): jwtData | undefined => {
  const token = getSessionToken();
  // Dando decode usando jwt-decode
  if (token) {
    const data = jwtDecode(token);
    return data as jwtData;
  }
  return undefined;
};
