import { post, put, remove } from 'api/client';

export const reqCreateTodo = (todo) => {
  return post('/todos', { todo });
};

export const reqUpdateTodo = (id, todo, isCompleted) => {
  return put('/todos', id, { todo, isCompleted });
};

export const reqDeleteTodo = (id) => {
  return remove('/todos', { id });
};
