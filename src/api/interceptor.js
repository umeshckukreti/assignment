import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return error;
  },
);

export default instance;
