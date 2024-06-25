import { AxiosError, AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';
import api from './app';

type payloadUser = {
  exp: number;
  iat: number;
  id: number;
  iss: string;
  nome: string;
  sub: string;
};

export async function entrar(email: string, senha: string): Promise<string | null> {
  await api
    .post('/auth/entrar', { email, senha })
    .then((response: AxiosResponse) => {
      const token = response.data.accessToken;
      console.log(`Token recebido: ${token}`);

      return token;
    })
    .catch((error: AxiosError) => {
      console.log(error);

      return null;
    });
}

export function setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

export function getCookie(name: string) {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
}

export function deleteCookie(name: string) {
  const date = new Date();

  // Set it expire in -1 days
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}

export function getCurrentUserId() {
  const token = getCookie('accessToken');

  if (token != null) {
    const decoded = jwtDecode(token) as payloadUser;
    return decoded.id;
  }

  return null;
}
