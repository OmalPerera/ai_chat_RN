import {SET_COUNTER} from '../../store/actionTypes';

const INITIAL_STATE = {
  currentNumber: 1,
};

const counterReducer = (state = INITIAL_STATE, action: Action) => {
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
