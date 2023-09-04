import axios from 'axios';
import {BASE_URL, OPEN_AI_URL} from './url';

const DEFAULT_TIMEOUT = 15000;
const OPENAI_KEY = '';

const axiosInstance = axios.create({
  baseURL: OPEN_AI_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_KEY}`,
  },
  timeout: DEFAULT_TIMEOUT,
});

axiosInstance.interceptors.response.use(
  response => {
    console.log('Response is intercepted: ', response.data);
    return response.data;
  },
  error => {
    console.error('Request failed:', error);
    return Promise.reject(error);
  },
);

const get = (url: string) => {
  return axiosInstance
    .get(url)
    .then(response => response)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const post = (url: string, data: any): any => {
  return axiosInstance
    .post(url, data)
    .then(response => response)
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const restClient = {get, post};
export default restClient;
