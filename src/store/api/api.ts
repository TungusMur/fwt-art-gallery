import axios from 'axios';

const api = axios.create({
  baseURL: 'https://internship-front.framework.team/',
});

export default api;
