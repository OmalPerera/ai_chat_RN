import {ConversationType} from '../../../types/chat.types';
import axios from 'axios';

const CHAT_URL = 'https://run.mocky.io/v3/427dd982-2563-436e-a1e2-706e4b9f9ff8';

const sendMsgService = (message: string) => {
  return axios
    .get(CHAT_URL)
    .then(response => response.data as ConversationType)
    .catch(e => console.log(e));
};

export default sendMsgService;
