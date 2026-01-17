import axios from 'axios';
import toast from 'react-hot-toast';

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    const requestUrl = error.config?.url;

    let errorMessage = 'An unknown error occurred';

    if (requestUrl?.includes('/character')) {
      if (requestUrl.split('/').filter(Boolean).length > 2) {
        errorMessage = "Couldn't load character details";
      } else {
        errorMessage = "Couldn't load the list of characters";
      }
    } else {
      errorMessage = "Couldn't load data";
    }

    toast.error(errorMessage, {
      duration: 4000,
      position: 'bottom-right'
    });

    return Promise.reject(error);
  }
);

export default apiClient;
