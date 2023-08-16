import {TODO_ITEM_FETCH_PENDING} from '../actionTypes';
import {Action} from './types';

const INITIAL_STATE = {
  todoList: [],
  isTodoItemPending: false,
};

const todoReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case TODO_ITEM_FETCH_PENDING:
      return {
        ...state,
        isTodoItemPending: true,
      };
    default:
      return state;
  }
};

export default todoReducer;
