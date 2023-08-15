import counterSlice from './newCounterReducer';
import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  counterSlice: counterSlice,
});

export default rootReducer;
