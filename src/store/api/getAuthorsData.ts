import api from './api';

const getAuthorsData = () => api.get('/artists/static');

export default getAuthorsData;
