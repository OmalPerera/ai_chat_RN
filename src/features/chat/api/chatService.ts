import restClient from '../../../network/httpService';
import {BASE_URL, SEND_PROMPT} from '../../../network/url';
import {ConversationType} from '../../../types/chat.types';
import axios from 'axios';

const sendMsgService = (message: string) => {
  //   return axios
  //     .get(BASE_URL + SEND_PROMPT)
  //     .then(response => response.data as ConversationType)
  //     .catch(e => console.log(e));

  return restClient.get(SEND_PROMPT);
};

export default sendMsgService;
