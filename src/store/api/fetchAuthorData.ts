import api from './api';

const fetchAuthorData = (id: string) => api.get(`/artists/static/${id}`);

export default fetchAuthorData;
