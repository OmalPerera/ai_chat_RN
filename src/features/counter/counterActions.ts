import {SET_COUNTER} from '../../store/actionTypes';

export const setCounterAction = (newValue: number) => ({
  type: SET_COUNTER,
  payload: newValue,
});
