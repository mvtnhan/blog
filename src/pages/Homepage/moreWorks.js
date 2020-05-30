import React from "react";
import styled from "styled-components";

import { Container } from "../../components/container.js";
import CircleButton from "./circle-button";

import BgWorks from "./images/worksbg.jpg";
import ImgResume from "./images/resume.png";
import ImgHost365 from "./images/host365.png";
import ImgManDrawing from "./images/man-drawing.png";
import ImgMedievalWall from "./images/medieval-wall.png";
import ImgRavenDB from "./images/ravendb.png";
import ImgRealtimeChatty from "./images/chatty.png";
import ImgTodo from "./images/todo.png";
import SpriteImage from "./images/design-elements.png";

const StyledCircleButton = styled(CircleButton)`
  @media (max-width: 780px) {
    left: 42%;
    bottom: 42%;
  }

  @media (max-width: 560px) {
    position: unset;
    margin: 0 30px;
  }
`;

export function MoreWorks() {
  return (
    <StyledMoreWorks>
      <Container>
        <a
          href="https://mvtnhan.github.io/todoapp/"
          className="Project LeftTop"
        >
          <img src={ImgTodo} alt="Todo" />
        </a>
        <a href="/resume" className="Project LeftMid">
          <img src={ImgResume} alt="Resume" />
        </a>
        <a href="#/" className="Project LeftBot">
          <img src={ImgRavenDB} alt="RavenDB" />
        </a>
        <a
          href="https://mvtnhan.github.io/realtime-chat-app/"
          className="Project RightTop"
        >
          <img src={ImgRealtimeChatty} alt="RealtimeChatty" />
        </a>
        <a href="#/" className="Project RightMid">
          <img src={ImgHost365} alt="Host365" />
        </a>
        <a href="#/" className="Project RightBot">
          <img src={ImgMedievalWall} alt="ImgMedievalWall" />
        </a>
        <StyledCircleButton href="#">
          <em>MORE</em> WORKS
        </StyledCircleButton>
        <div className="ColumnWrapper">
          <img src={ImgManDrawing} alt="Man drawing" />
          <BlockQuote>
            I consider myself a positive person as I’ve never hesitated to
            encounter new challenges. With my passion, I’m willing to learn and
            able to work under a high workload so that I can have a chance to
            create a better version of myself day after day.
          </BlockQuote>
        </div>
      </Container>
    </StyledMoreWorks>
  );
}

const BlockQuote = styled.blockquote`
  position: relative;
  width: 400px;
  text-align: center;
  color: #333333;
  font-size: 18px;
  line-height: 24px;

  &::before,
  &::after {
    position: absolute;
    font-size: 54px;
    color: #9e3322;
    width: 13px;
    height: 12px;
  }

  &::before {
    content: "“";
    left: -16px;
    top: 8px;
  }

  &::after {
    content: "”";
    right: -8px;
    bottom: 0px;
  }
`;

const StyledMoreWorks = styled.section`
  height: 680px;
  background: url(${BgWorks}) repeat-x left top;

  .ColumnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    @media (max-width: 860px) {
      img {
        height: 50%;
      }
    }

    @media (max-width: 780px) {
      display: none;
    }
  }

  ${Container} {
    @media (max-width: 560px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  a.Project {
    background: url(${SpriteImage}) no-repeat 0px -136px;
    display: block;
    width: 174px;
    height: 174px;
    position: absolute;

    img {
      width: 160px;
      height: 160px;
      margin: 7px;
    }

    @media (max-width: 560px) {
      width: 130px;
      height: 130px;
      background: none;
      position: unset;
      margin: 0px 8px;

      img {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
  }

  .LeftTop {
    left: 90px;
    top: 58px;
  }

  .LeftMid {
    left: 10px;
    top: 253px;
  }

  .LeftBot {
    left: 90px;
    top: 448px;
  }

  .RightTop {
    right: 90px;
    top: 58px;
  }

  .RightMid {
    right: 10px;
    top: 253px;
  }

  .RightBot {
    right: 90px;
    top: 448px;
  }

  ${BlockQuote} {
    @media (max-width: 980px) {
      width: 34%;
      &::after {
        content: "”";
        right: 0px;
        bottom: 0px;
      }
    }

    @media (max-width: 860px) {
      width: 28%;
    }
  }
`;
