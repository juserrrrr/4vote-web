import axios from 'axios';
import api from './api';

export interface TagDto {
  nome: string;
}

async function getById(tag_id: number): Promise<Error> {
  try {
    const { data } = await api.get('/tag/id', tag_id);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar pegar o id de tag');
}

async function findAll(tag: TagDto): Promise<Error> {
  try {
    const { data } = await api.get('tag', tag);
    if (data) return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data.message);
    }
    return new Error('Erro desconhecido');
  }
  return new Error('Erro ao tentar achar tag');
}

export const tagService = {
  getById,
  findAll,
};
