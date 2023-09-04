import {isLoading, updateThread} from '../reducer/chatReducer';
import {ConversationType} from '../../../types/chat.types';
import {Dispatch} from 'redux';
import sendMsgService from '../api/chatService';

export const sendMsgAction = (message: ConversationType) => {
  return (dispatch: Dispatch) => {
    dispatch(updateThread(message));
    dispatch(isLoading(true));
    sendMsgService(message.msgContent)
      .then(response => {
        dispatch(updateThread(response));
      })
      .catch(e => console.log('ERROR : sendMsgAction', e))
      .finally(() => dispatch(isLoading(false)));
  };
};
