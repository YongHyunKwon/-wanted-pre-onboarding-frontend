import { reqDeleteTodo, reqUpdateTodo } from 'api/todo/todo';
import { useTodos } from 'modules/context/TodosContext';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoMdCloudUpload, IoMdTrash } from 'react-icons/io';
import { MdRefresh, MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { RiTodoFill, RiPencilFill } from 'react-icons/ri';
import { AiOutlineFileDone } from 'react-icons/ai';

const Todo = ({ props }) => {
  const { id, todo, isCompleted } = props;
  const { getTodos, setComplete } = useTodos();

  const [update, setUpdate] = useState(false);
  const [hover, setHover] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    if (update) {
      contentRef.current.value = todo;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const onChange = (e) => {
    let { value } = e.target;

    if (value.length > 200) {
      contentRef.current.value = value.substr(0, 200);
    }
  };

  const onCheck = async (complete) => {
    const { status } = await reqUpdateTodo(id, todo, complete);

    if (status === 200) {
      setComplete(true);
      getTodos();
    }
  };

  const onUpdate = async () => {
    const { status } = await reqUpdateTodo(
      id,
      contentRef.current.value,
      isCompleted
    );

    if (status === 200) {
      setUpdate(false);
      setComplete(true);
      getTodos();
    }
  };

  const onRemove = async () => {
    const { status } = await reqDeleteTodo(id);

    if (status === 204) {
      setComplete(true);
      getTodos();
    }
  };

  return (
    <Wrap
      hover={hover}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <IconStyles>
        {isCompleted ? <AiOutlineFileDone /> : <RiTodoFill />}
      </IconStyles>
      {update ? (
        <InputStyles type="text" ref={contentRef} onChange={onChange} />
      ) : (
        <TextStyles isCompleted={isCompleted}>{todo}</TextStyles>
      )}
      {hover ? (
        <div>
          <ButtonWrap>
            {isCompleted ? (
              <ButtonStyles
                className="check"
                title="되돌리기"
                onClick={() => onCheck(false)}
              >
                <MdRefresh />
              </ButtonStyles>
            ) : (
              <ButtonStyles
                className="check"
                title="완료"
                onClick={() => onCheck(true)}
              >
                <BsCheck />
              </ButtonStyles>
            )}
          </ButtonWrap>
          <ButtonWrap>
            {update ? (
              <>
                <ButtonStyles
                  onClick={onUpdate}
                  title="완료"
                  className="update"
                >
                  <IoMdCloudUpload />
                </ButtonStyles>
                <ButtonStyles
                  onClick={() => setUpdate(false)}
                  title="취소"
                  className="cancel"
                >
                  <MdOutlineCancel />
                </ButtonStyles>
              </>
            ) : (
              <>
                {isCompleted ? null : (
                  <ButtonStyles
                    className="update"
                    title="수정"
                    onClick={() => setUpdate(true)}
                  >
                    <RiPencilFill />
                  </ButtonStyles>
                )}
              </>
            )}
          </ButtonWrap>
          <ButtonWrap>
            <ButtonStyles className="remove" title="삭제" onClick={onRemove}>
              <IoMdTrash />
            </ButtonStyles>
          </ButtonWrap>
        </div>
      ) : null}
    </Wrap>
  );
};

export default Todo;

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px;
  background-color: white;
  box-shadow: ${(props) => (props.hover ? '0px 0px 8px 3px #c4c4c4' : '')};
  z-index: ${(props) => (props.hover ? 1 : 0)};
`;

const IconStyles = styled.div`
  display: flex;
  align-content: center;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #e8e8e8;
  border-radius: 100%;

  svg {
    font-size: 25px;
    color: #fcae2e;
  }
`;

const InputStyles = styled.input`
  border: none;
  border-bottom: 1px solid black;

  :focus {
    outline: none;
  }
`;

const TextStyles = styled.p`
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isCompleted ? '#c4c4c4' : 'black')};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : null)};
`;

const ButtonWrap = styled.div`
  .check {
    position: absolute;
    top: -16%;
    right: 5%;
  }

  .update {
    position: absolute;
    top: 25%;
    right: 15%;
  }

  .cancel {
    position: absolute;
    top: 25%;
    right: -4.5%;
  }

  .remove {
    position: absolute;
    right: 5%;
    bottom: -16%;
  }
`;

const ButtonStyles = styled.button`
  display: flex;
  align-content: center;
  padding: 8px;
  background-color: white;
  border: none;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 1px #c4c4c4;

  svg {
    font-size: 22px;
    color: #fcae2e;
  }
`;
