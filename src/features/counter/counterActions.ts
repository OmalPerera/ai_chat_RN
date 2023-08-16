import {SET_COUNTER} from '../../store/actionTypes';
import {Action} from '../../store/reducers/types';

export const setCounterAction = (newValue: number): Action => ({
  type: SET_COUNTER,
  payload: newValue,
});
