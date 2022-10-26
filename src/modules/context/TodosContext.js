import { reqGetTodos } from 'api/todos/todos';
import React, { createContext, useContext, useState } from 'react';

const context = {
  todos: [],
  getTodos: () => {},
};

const TodosContext = createContext(context);

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const { data, status } = await reqGetTodos();

    if (status === 200) setTodos([...data]);
  };

  const value = { todos, getTodos };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};

export { TodosContextProvider, TodosContext };
