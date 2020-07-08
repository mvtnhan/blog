import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

import { Container } from "../../components/container.js";
import CircleButton from "./circle-button";

import BgWorks from "./images/worksbg.jpg";
import ImgTetris from "./images/tetris.png";
import ImgFlappyBird from "./images/flappy-bird.jpg";
import ImgLivolin from "./images/livolin.jpg";
import ImgManDrawing from "./images/man-drawing.png";
import ImgRealtimeChatty from "./images/chatty.png";
import ImgResume from "./images/resume.png";
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
        <Tooltip title="Todo Application" placement="top">
          <a
            href="https://github.com/mvtnhan/todoapp"
            target="_blank"
            rel="noopener noreferrer"
            className="Project LeftTop"
          >
            <img src={ImgTodo} alt="Todo" />
          </a>
        </Tooltip>

        <Tooltip title="My Online Curriculum Vitae" placement="top">
          <a
            href="https://github.com/mvtnhan/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="Project LeftMid"
          >
            <img src={ImgResume} alt="Resume" />
          </a>
        </Tooltip>

        <Tooltip title="Real-Time Chat App" placement="top">
          <a
            href="https://github.com/mvtnhan/realtime-chat-app"
            target="_blank"
            rel="noopener noreferrer"
            className="Project RightTop"
          >
            <img src={ImgRealtimeChatty} alt="RealtimeChatty" />
          </a>
        </Tooltip>

        <Tooltip title="Livolin hompepage" placement="top">
          <a
            href="https://github.com/mvtnhan/livolin"
            target="_blank"
            rel="noopener noreferrer"
            className="Project RightMid"
          >
            <img src={ImgLivolin} alt="Livolin" className="Round" />
          </a>
        </Tooltip>

        <Tooltip title="flappy bird game" placement="top">
          <a
            href="https://github.com/mvtnhan/flappy-bird"
            target="_blank"
            rel="noopener noreferrer"
            className="Project LeftBot"
          >
            <img src={ImgFlappyBird} alt="FlappyBird" className="Round" />
          </a>
        </Tooltip>

        <Tooltip title="Tetris Game" placement="top">
          <a
            href="https://github.com/mvtnhan/tetris"
            target="_blank"
            rel="noopener noreferrer"
            className="Project RightBot"
          >
            <img src={ImgTetris} alt="Tetris" className="Round" />
          </a>
        </Tooltip>

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

  .Round {
    border-radius: 50%;
  }

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
