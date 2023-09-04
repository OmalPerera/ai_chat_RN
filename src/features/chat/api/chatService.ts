import restClient from '../../../network/httpService';
import {BASE_URL, OPEN_AI_COMPLETION, SEND_PROMPT} from '../../../network/url';
import {ConversationType, ResponseDataType} from '../../../types/chat.types';
import axios, {AxiosResponse} from 'axios';

const sendMsgService = (message: string) => {
  //   return axios
  //     .get(BASE_URL + SEND_PROMPT)
  //     .then(response => response.data as ConversationType)
  //     .catch(e => console.log(e));

  return restClient.get(SEND_PROMPT);
};

export const genrateResponseService = (
  message: string,
): Promise<ResponseDataType> => {
  const body = {
    prompt: message,
    max_tokens: 40,
    model: 'text-davinci-003',
    temperature: 1,
  };

  return restClient.post(OPEN_AI_COMPLETION, body);
};

export default sendMsgService;
