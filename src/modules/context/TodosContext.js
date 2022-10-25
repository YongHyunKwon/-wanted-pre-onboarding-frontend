import { reqGetTodos } from 'api/todos/todos';
import React, { createContext, useContext, useState } from 'react';

const context = {
  todos: [],
  complete: false,
  getTodos: () => {},
};

const TodosContext = createContext(context);

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState(false);

  const getTodos = async () => {
    const data = await reqGetTodos();

    if (data) setTodos([...data]);
  };

  const value = { todos, complete, setComplete, getTodos };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};

export { TodosContextProvider, TodosContext };
