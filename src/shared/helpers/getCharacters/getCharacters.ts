import axios from 'axios';
import toast from 'react-hot-toast';

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = 'Couldn`t load the list of characters';

    toast.error(errorMessage, {
      duration: 4000,
      position: 'bottom-right'
    });

    return Promise.reject(error);
  }
);

export default apiClient;
