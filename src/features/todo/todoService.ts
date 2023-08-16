const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/';

const getTodoItemById = async (id: number) => {
  return fetch(TODO_URL + id)
    .then(response => response.json())
    .then(data => data);
};

export default getTodoItemById;
