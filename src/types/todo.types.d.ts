export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoReducerType = {
  todoList: TodoType[];
  isTodoItemPending: boolean;
};
