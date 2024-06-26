import { AxiosError, AxiosResponse } from 'axios';
import api from './api';
import { getCookie, getCurrentUserId } from './utils';

export async function updateCurrentUser(name: string, email: string) {
  const token = getCookie('accessToken');
  let found = false;

  await api
    .patch(
      `/usuarios/me`,
      { email: email, nome: name },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then((response: AxiosResponse) => {
      found = true;
    })
    .catch((error: AxiosError) => {
      found = false;
    });

  return found;
}

export async function getCurrentUserInfo() {
  const token = getCookie('accessToken');
  console.log(token);
  var data = null;

  await api
    .get('/usuarios/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response: AxiosResponse) => {
      data = { nome: response.data[0]['nome'], email: response.data[0]['email'], cpf: response.data[0]['cpf'] };
    })
    .catch((error: AxiosError) => {
      return null;
    });

  if (data != null) {
    return data;
  } else {
    return null;
  }
}
