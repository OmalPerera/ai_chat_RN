//import {SET_COUNTER} from '../../store/actionTypes';
const SET_COUNTER = 'counter/setValue';

export const setCounterAction = (newValue: number) => ({
  type: SET_COUNTER,
  payload: 100,
});

export const customSetCounterAction = (value: number, gap: number) => {
  console.log('Prepare : ', value, gap);
  return {payload: value - gap};
};
