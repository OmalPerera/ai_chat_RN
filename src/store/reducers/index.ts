import counterSlice from '../../features/counter/newCounterReducer';
import {combineReducers} from 'redux';
import counterReducer from '../../features/counter/counterReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  counterSlice: counterSlice,
});

export default rootReducer;
