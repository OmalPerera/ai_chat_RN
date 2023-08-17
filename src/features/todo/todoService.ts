import {TodoType} from '../../types/todo.types';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/';

const getTodoItemById = (id: number) => {
  return fetch(TODO_URL + id)
    .then(response => response.json())
    .then(data => data as TodoType);
};

export default getTodoItemById;
