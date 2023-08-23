import {ChatReducerType} from '../../types/chat.types';
import {CounterReducerType} from '../../types/counter.types';

export type Action = {
  type: string;
  payload: any;
};

export type RootStoreType = {
  counterReducer: CounterReducerType;
  chatReducer: ChatReducerType;
};
