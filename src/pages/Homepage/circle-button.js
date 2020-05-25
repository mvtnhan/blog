import React from 'react';
import styled from 'styled-components';
import SpriteImage from './images/design-elements.png';

export default function CircleButton(props) {
  return (
    <StyledCircleButton href={props.href} className={props.className}>
      {props.children}
    </StyledCircleButton>
  );
}

const StyledCircleButton = styled.a`
  position: absolute;
  left: 270px;
  bottom: 315px;
  width: 103px;
  height: 80px;
  display: block;
  color: #ffffff;
  background: url(${SpriteImage}) no-repeat 0px -310px;
  transition: transform 1s;
  overflow: hidden;
  transform: rotate(0deg);
  line-height: 28px;
  padding: 24px 0 0 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 28px;

  &:hover {
    transform: rotate(-15deg);
  }

  em {
    font-style: normal;
    letter-spacing: 4px;
    display: block;
  }
`;
