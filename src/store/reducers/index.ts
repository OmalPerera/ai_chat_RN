import {combineReducers} from 'redux';
import counterReducer from '../../features/counter/counterReducer';
import chatReducer from '../../features/chat/reducer/chatReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  chatReducer: chatReducer,
});

export default rootReducer;
