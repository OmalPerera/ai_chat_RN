import sendMsgService from '../api/chatService';
import {isLoading, updateThread} from '../reducer/chatReducer';
import {ConversationType} from '../../../types/chat.types';
import {Dispatch} from 'redux';

export const sendMsgAction = (message: ConversationType) => {
  return (dispatch: Dispatch) => {
    dispatch(updateThread(message));
    dispatch(isLoading(true));
    sendMsgService(message.msgContent)
      .then(response => {
        dispatch(updateThread(response));
        dispatch(isLoading(false));
      })
      .catch(e => console.log('error: ', e));
  };
};
