import { sessionService } from './sessions';

const axios = require('axios');

export const headerAutorization = {
  headers: {
    Authorization: `Bearer ${sessionService.getSessionToken('token')}`,
  },
};

const api = axios.create({
  baseURL: process.env.URL_API,
  withCredentials: true,
});

export default api;
