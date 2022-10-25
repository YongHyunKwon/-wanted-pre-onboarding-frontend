import AuthForm from 'components/auth/AuthForm';
import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Wrap>
      <AuthForm />
    </Wrap>
  );
};

export default LoginPage;

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
