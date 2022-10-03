import api from './api';

const getAuthorsData = () => api.get('/data/dataAuthors.json');

export default getAuthorsData;
