import {combineReducers} from 'redux';
import counterReducer from '../../features/counter/counterReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

export default rootReducer;
