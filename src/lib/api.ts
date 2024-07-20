const axios = require('axios');

export const headerAutorization = {
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

const api = axios.create({
  baseURL: process.env.URL_API,
  withCredentials: true,
});

export default api;
