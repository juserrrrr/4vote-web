const axios = require('axios');

const api = axios.create({
  baseURL: process.env.URL_API,
});

export default api;
