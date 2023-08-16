import {Dispatch} from 'redux';
import {
  TODO_ITEM_FETCH_FAILED,
  TODO_ITEM_FETCH_PENDING,
  TODO_ITEM_FETCH_SUCCESS,
} from '../../store/actionTypes';
import {Todo} from '../../types/todo.types';
import getTodoItemById from './todoService';

export const addNewTodoItem = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(todoItemPending());

    getTodoItemById(id)
      .then(response => {
        dispatch(fetchTodoItemSuccess(response));
      })
      .catch(() => {
        dispatch(fetchTodoItemFailed());
      });
  };
};

export const todoItemPending = () => ({
  type: TODO_ITEM_FETCH_PENDING,
});

export const fetchTodoItemSuccess = (item: Todo) => ({
  type: TODO_ITEM_FETCH_SUCCESS,
  payload: item,
});

export const fetchTodoItemFailed = () => ({
  type: TODO_ITEM_FETCH_FAILED,
});
