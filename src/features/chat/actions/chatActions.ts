import {updateThread} from '../reducer/chatReducer';
import {ConversationType} from '../../../types/chat.types';
import {Dispatch} from 'redux';

export const sendMsgAction = (message: ConversationType) => {
  return (dispatch: Dispatch) => {
    dispatch(updateThread(message));
  };
};
