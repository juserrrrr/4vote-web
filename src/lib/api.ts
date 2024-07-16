const axios = require('axios');

export const headerAutorization = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiSm9hbyIsImlhdCI6MTcyMTE0ODEzMiwiZXhwIjoxNzIxMjM0NTMyLCJpc3MiOiJBc3NpbmF0dXJhNFZvdGUiLCJzdWIiOiIxIn0.WS0wUA3hy0iEjXOAayBq4UYCsWHjQ21isNgioqFEclQ`,
  },
};

const api = axios.create({
  baseURL: process.env.URL_API,
});

export default api;
