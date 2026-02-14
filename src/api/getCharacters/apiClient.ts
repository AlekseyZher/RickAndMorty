import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
