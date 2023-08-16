import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer,
});

export default rootReducer;
