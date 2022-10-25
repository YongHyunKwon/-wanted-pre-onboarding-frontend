import Snackbar from 'components/common/Snackbar';
import Todo from 'components/todo/Todo';
import { useTodos } from 'modules/context/TodosContext';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import Dialog from 'components/common/Dialog';
import TodoModal from 'components/todo/TodoModal';

const Todos = () => {
  const { todos, complete, setComplete, getTodos } = useTodos();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrap>
      <ButtonStyles onClick={() => setOpen(true)}>
        <AiOutlinePlus />
      </ButtonStyles>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo props={todo} />
          </li>
        ))}
      </ul>
      <Dialog open={open} onClose={setOpen}>
        <TodoModal onClose={setOpen} />
      </Dialog>

      <Snackbar open={complete} msg="완료했습니다." onClose={setComplete} />
    </Wrap>
  );
};

export default Todos;

const Wrap = styled.div`
  height: 600px;
  overflow: auto;
  padding: 0 20px;
  background-color: white;

  li {
    border-bottom: 1.5px solid #e8e8e8;

    :last-child {
      border-bottom: none;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonStyles = styled.button`
  position: fixed;
  right: 3%;
  bottom: 3%;
  display: flex;
  align-content: center;
  padding: 8px;
  background-color: white;
  border: none;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 1px #c4c4c4;

  svg {
    font-weight: bold;
    font-size: 40px;
    color: #fcae2e;
  }
`;
