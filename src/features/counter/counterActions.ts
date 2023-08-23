import {Dispatch} from 'redux';
//import {setValue} from './newCounterReducer';

//import {SET_COUNTER} from '../../store/actionTypes';
const SET_COUNTER = 'counter/setValue';

export const setCounterAction = (newValue: number) => ({
  type: SET_COUNTER,
  payload: 100,
});

export const customSetCounterAction = (value: number, gap: number) => {
  return {payload: value - gap};
};

// export const doAPIcall = () => {
//   return (dispatch: Dispatch) => {
//     dispatch(setValue(1, 5));
//   };
// };
