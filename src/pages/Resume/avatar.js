import React from 'react';
import styled from 'styled-components';
import imgAvatar from './images/avatar.png';

export function Avatar() {
  return (
    <StyledAvatar>
      <div className="boxImg">
        <img src={imgAvatar} alt="img avatar" />
      </div>
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  padding: 24px 0;
  background-color: #ececec;

  .boxImg {
    width: 150px;
    height: 150px;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
