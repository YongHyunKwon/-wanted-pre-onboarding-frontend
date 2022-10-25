import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { reqSignIn, reqSignUp } from 'api/auth/auth';
import useForm from 'modules/hook/useForm';
import { useAuth } from 'modules/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const { saveToken } = useAuth();
  const { checkValidation } = useForm();

  const [type, setType] = useState('login');
  const [error, setError] = useState({ email: false, password: false });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }, [type]);

  const onChange = (e) => {
    const { id, value } = e.target;

    setError((prev) => ({ ...prev, [id]: checkValidation(id, value) }));
  };

  const request = async (email, password) => {
    let data = null;

    if (type === 'login') {
      data = await reqSignIn(email, password);
    } else {
      data = await reqSignUp(email, password);
    }

    return data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await request(
      emailRef.current.value,
      passwordRef.current.value
    );

    // 요청 실패
    // data에 statusCode가 있으면 에러
    if (data.statusCode) {
      alert(data.message);
      return;
    }

    // 요청 성공
    // 로컬 스토리지에 token 저장
    saveToken(data.data.access_token);
    navigate('/todo');
  };

  return (
    <Wrap>
      <TitleWrap>
        <h1>ToDo List!</h1>
        <span>해야 할 일을 기록하세요</span>
      </TitleWrap>
      <form onSubmit={onSubmit}>
        <InputStyles>
          <input
            type="email"
            ref={emailRef}
            id="email"
            placeholder="이메일"
            onChange={onChange}
          />
          <MdEmail />
        </InputStyles>

        <InputStyles>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            placeholder="비밀번호"
            onChange={onChange}
          />
          <RiLockPasswordFill />
        </InputStyles>
        <ButtonStyles type="submit" disabled={!(error.email && error.password)}>
          {type === 'login' ? '로그인' : '회원가입'}
        </ButtonStyles>
      </form>

      {type === 'login' ? (
        <RegisterWrap>
          회원이 아니신가요?
          <button onClick={() => setType('register')}>회원가입</button>
        </RegisterWrap>
      ) : (
        <RegisterWrap>
          회원이신가요?
          <button onClick={() => setType('login')}>로그인</button>
        </RegisterWrap>
      )}
    </Wrap>
  );
};

export default AuthForm;

const Wrap = styled.div`
  width: 340px;
  margin: 0 auto;
  padding: 50px 30px;
  background-color: white;
  text-align: center;
`;

const TitleWrap = styled.div`
  margin-bottom: 40px;
  h1 {
    font-weight: bold;
    margin: 10px 0;
  }

  span {
    font-size: 13px;
  }
`;

const InputStyles = styled.div`
  position: relative;

  input {
    width: 250px;
    height: 40px;
    margin-bottom: 20px;
    padding: 0 25px;
    border: none;
    border-bottom: 1px solid black;

    :focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    top: 19%;
    left: 8%;
  }
`;

const ButtonStyles = styled.button`
  width: 300px;
  height: 45px;
  margin: 40px 0;
  background-color: ${(props) => (props.disabled ? '#c4c4c4' : '#fcae2e')};
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const RegisterWrap = styled.div`
  margin-top: 20px;
  font-size: 13px;

  button {
    background-color: white;
    border: none;
    color: #fcae2e;
  }
`;
