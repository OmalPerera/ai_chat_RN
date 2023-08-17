import {CounterReducerType} from '../../types/counter.types';

export type ActionType = {
  type: string;
  payload: any;
};

export type RootStoreType = {
  counterReducer: CounterReducerType;
  todoReducer: TodoReducerType;
};
