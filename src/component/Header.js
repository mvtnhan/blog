import Logo from "../images/Logo.png";
import React from "react";
import Rope from "../images/logo-rope.png";
import styled from "styled-components";

export function RenderHeader() {
  return (
    <Header>
      <Container>
        <h1 className="Logo">
          <img src={Logo} alt="Logo Web Craftsman" />
        </h1>
      </Container>
    </Header>
  );
}

const Container = styled.div`
  max-width: 984px;
  margin: 0 auto;
  clear: both;
`;

const Header = styled.header`
  overflow: hidden;
  height: 125px;
  padding: 20px;

  .Logo {
    width: 565px;
    background: url(${Rope}) no-repeat center top;
    padding: 38px;
    position: absolute;

    img {
      padding: 0;
      margin: 0;
      transition: transform 1s;
      &:hover {
        transform: rotate(1.9deg);
      }
    }
  }

  @media (max-width: 980px) {
    ${Container} {
      width: 768px;
    }
  }

  @media (max-width: 860px) {
    display: none;
    ${Container} {
      width: 580px;
    }
  }
`;
