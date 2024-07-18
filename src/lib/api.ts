const axios = require('axios');

export const headerAutorization = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR2FicmllbCBBbG1laWRhICIsImlhdCI6MTcyMTI0MjY2NiwiZXhwIjoxNzIxMzI5MDY2LCJpc3MiOiJBc3NpbmF0dXJhNFZvdGUiLCJzdWIiOiIxIn0.RqGVBwSt-V14U0CLtW0UINUz5o71B-diX8R5ddGetFs`,
  },
};

const api = axios.create({
  baseURL: process.env.URL_API,
});

export default api;
