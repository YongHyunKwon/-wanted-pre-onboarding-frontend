import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

const Snackbar = ({ open, msg, onClose }) => {
  return (
    <>
      {open ? (
        <Wrap>
          {msg}
          <span onClick={() => onClose(false)}>
            <MdOutlineCancel />
          </span>
        </Wrap>
      ) : null}
    </>
  );
};

export default React.memo(Snackbar);

const Wrap = styled.div`
  position: fixed;
  left: 3%;
  bottom: 3%;
  display: flex;
  width: 200px;
  padding: 13px;
  background-color: #444950;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  animation: fadein 0.3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    margin-left: auto;
    cursor: pointer;

    svg {
      font-size: 22px;
    }
  }
`;
