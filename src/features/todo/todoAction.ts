import {Dispatch} from 'redux';
import {TODO_ITEM_FETCH_PENDING} from '../../store/actionTypes';

export const addNewTodoItem = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(todoItemPending());
  };
};

export const todoItemPending = () => ({
  type: TODO_ITEM_FETCH_PENDING,
});
