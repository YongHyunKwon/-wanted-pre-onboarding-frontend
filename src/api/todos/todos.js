import { get } from 'api/client';

export const reqGetTodos = () => {
  return get('/todos');
};
