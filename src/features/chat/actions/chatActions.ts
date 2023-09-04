import {isLoading, updateThread} from '../reducer/chatReducer';
import {ConversationType} from '../../../types/chat.types';
import {Dispatch} from 'redux';
import sendMsgService, {genrateResponseService} from '../api/chatService';

export const sendMsgAction = (message: ConversationType) => {
  return (dispatch: Dispatch) => {
    dispatch(updateThread(message));
    dispatch(isLoading(true));
    genrateResponseService(message.msgContent)
      .then(response => {
        const converstaionFromBot: ConversationType = {
          isBot: true,
          msgContent: response.choices[0].text,
          timeStamp: response.created,
        };
        dispatch(updateThread(converstaionFromBot));
      })
      .catch(e => console.log('ERROR : sendMsgAction', e))
      .finally(() => dispatch(isLoading(false)));
  };
};
