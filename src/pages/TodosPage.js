import Todos from 'components/todos/Todos';
import React from 'react';
import styled from 'styled-components';

const TodoPage = () => {
  return (
    <Wrap>
      <ContentWrap>
        <HeaderStyles>
          <h1>ToDo List</h1>
        </HeaderStyles>
        <Todos />
      </ContentWrap>
    </Wrap>
  );
};

export default TodoPage;

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 430px;
`;

const HeaderStyles = styled.div`
  height: 50px;
  padding: 10px;
  padding-left: 0;
  text-align: start;

  h1 {
    margin: 0;
  }
`;
