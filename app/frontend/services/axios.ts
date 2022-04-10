import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});

api.interceptors.request.use((config) => {
  config.headers = { 'Content-Type': 'application/json' };

  if (localStorage.getItem('@Photomatic:token')) {
    config.headers = {
      Authorization: `${localStorage.getItem('@Photomatic:token')}`,
    };
  }

  return config;
});

api.interceptors.response.use(
  (config) => config,
  (error) => {
    const { data } = error.response;

    console.log(data);
    localStorage.clear();
  },
);
