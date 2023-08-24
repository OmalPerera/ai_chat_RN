import axios from 'axios';

const defaultTimeout = 15000;

const axiosInstance = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: defaultTimeout,
});

// axiosInstance.interceptors.response.use(
//   response => {
//     console.log('Response is intercepted: ', response.data);
//     return response.data;
//   },
//   error => {
//     console.error('Request failed:', error);
//     return Promise.reject(error);
//   },
// );

const get = (url: string) => {
  return axiosInstance
    .get(url)
    .then(response => response.data)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const post = (url: string, data: any) => {
  return axiosInstance
    .post(url, data)
    .then(response => response.data)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const restClient = {get, post};
export default restClient;
