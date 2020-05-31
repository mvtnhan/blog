import React from 'react';
import styled from 'styled-components';

import imgAvatar from './images/avatar.png';

export function Avatar(props) {
  return (
    <StyledAvatar className={props.className}>
      <img src={imgAvatar} alt="img avatar" />
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;
