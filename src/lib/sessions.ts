import { cookies } from 'next/headers';

function createSessionToken(value: string) {
  cookies().set('token', value, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 1,
    path: '/',
  });
}

function deleteSessionToken(name: string) {
  cookies().delete('token');
}

function getSessionToken(name: string) {
  return cookies().get('token')?.value;
}

export const sessionService = {
  createSessionToken,
  deleteSessionToken,
  getSessionToken,
};
