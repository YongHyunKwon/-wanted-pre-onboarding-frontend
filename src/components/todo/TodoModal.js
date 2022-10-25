const { reqCreateTodo } = require('api/todo/todo');
const { useTodos } = require('modules/context/TodosContext');
const { useRef } = require('react');
const { default: styled } = require('styled-components');

const TodoModal = ({ onClose }) => {
  const { getTodos } = useTodos();
  const contentRef = useRef(null);

  const onChange = (e) => {
    let { value } = e.target;

    if (value.length > 200) {
      contentRef.current.value = value.substr(0, 200);
    }
  };

  const onCreate = async () => {
    const { status } = await reqCreateTodo(contentRef.current.value);

    if (status === 201) {
      onClose(false);
      getTodos();
    }
  };

  return (
    <Wrap>
      <input
        type="text"
        ref={contentRef}
        placeholder="내용을 입력하세요."
        onChange={onChange}
      />
      <ButtonWrap>
        <button onClick={onCreate}>생성</button>
        <button class="cancel" onClick={() => onClose(false)}>
          취소
        </button>
      </ButtonWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  height: 100%;

  input {
    position: absolute;
    top: 30%;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;

    :focus {
      outline: none;
    }
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  button {
    width: 50%;
    height: 30px;
    background-color: #fcae2e;
    border: 1px solid white;
    color: white;
    font-weight: bold;
  }

  .cancel {
    background-color: #f13838;
  }
`;

export default TodoModal;
