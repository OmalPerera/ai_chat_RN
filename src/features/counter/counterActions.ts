import {SET_COUNTER} from '../../store/actionTypes';
import {ActionType} from '../../store/reducers/types';

export const setCounterAction = (newValue: number): ActionType => ({
  type: SET_COUNTER,
  payload: newValue,
});
