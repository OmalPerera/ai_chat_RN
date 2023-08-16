import {
  TODO_ITEM_FETCH_FAILED,
  TODO_ITEM_FETCH_PENDING,
  TODO_ITEM_FETCH_SUCCESS,
} from '../actionTypes';
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
    case TODO_ITEM_FETCH_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
        isTodoItemPending: false,
      };
    case TODO_ITEM_FETCH_FAILED:
      return {
        ...state,
        isTodoItemPending: false,
      };
    default:
      return state;
  }
};

export default todoReducer;
