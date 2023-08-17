import {CounterReducerType} from '../../types/counter.types';
import {SET_COUNTER} from '../actionTypes';
import {ActionType} from './types';

const INITIAL_STATE: CounterReducerType = {
  currentNumber: 1,
};

const counterReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case SET_COUNTER:
      console.log('----- Reducer : ', action);
      return {
        ...state,
        currentNumber: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
