import React from 'react';
import styled from 'styled-components';

const Dialog = ({ children, open, onClose }) => {
  return (
    <>
      {open ? (
        <Wrap>
          <Body>{children}</Body>
        </Wrap>
      ) : null}
    </>
  );
};

export default Dialog;

const Wrap = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 110px;
  transform: translateX(-50%) translateY(-50%);
  padding: 20px;
  background-color: white;
`;
