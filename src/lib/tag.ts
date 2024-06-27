import { AxiosError, AxiosResponse } from 'axios';
import api from './api';

interface Tag {
  nome: string;
}

export function findAllTag(): Promise<boolean> {
  return api
    .get('tag')
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function createTag(tag: Tag): Promise<boolean> {
  return api
    .post('tag', tag)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function deleteTag(id: number, tag: Tag): Promise<boolean> {
  return api
    .delete(`tag/${id}`, tag)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}

export function updateTag(id: number, tag: Tag): Promise<boolean> {
  return api
    .put(`tag/${id}`, tag)
    .then((response: AxiosResponse) => {
      console.log(response.data);
      return true;
    })
    .catch((error: AxiosError) => {
      console.log(error);
      return false;
    });
}
