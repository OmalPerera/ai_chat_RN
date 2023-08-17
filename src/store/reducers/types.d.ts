import {CounterReducerType} from '../../types/counter.types';
import {TodoReducerType} from '../../types/todo.types';

export type ActionType = {
  type: string;
  payload: any;
};

export type RootStoreType = {
  counterReducer: CounterReducerType;
  todoReducer: TodoReducerType;
};
