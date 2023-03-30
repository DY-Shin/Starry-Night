// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:18090',
});

export default api;
