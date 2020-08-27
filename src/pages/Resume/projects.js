import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";

export default function Projects() {
  return (
    <div>
      <BlockHeader title="Projects" />
      <BlockContent className="BlockContentRight">
        <>
          <BlockProjects
            link="https://github.com/mvtnhan/realtime-chat-app"
            projectname="A Real-Time Chat App"
            description="Using ReactJS and Firebase to create a simple real-time chat application"
          />
          <BlockProjects
            link="https://github.com/mvtnhan/todoapp"
            projectname="Todo App"
            description="Building a simple TodoApp with different data structures using ES6, ReactJS and Styled-Component"
          />
          <BlockProjects
            link="https://github.com/mvtnhan/flappy-bird"
            projectname="Flappy Bird"
            description="Flappy Bird Game using reactjs, redux and redux-thunk"
          />
          <BlockProjects
            link="https://github.com/mvtnhan/tetris"
            projectname="Tetris"
            description="Tetris Game using reactjs and react-hooks"
          />
        </>
      </BlockContent>
    </div>
  );
}

function BlockProjects(props) {
  return (
    <StyledBlockProject className="BlockProject">
      <h1>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.projectname}
        </a>
      </h1>
      <span>{props.description}</span>
    </StyledBlockProject>
  );
}

BlockProjects.propTypes = {
  projectname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const StyledBlockProject = styled.div`
  &:not(:last-child) {
    padding-bottom: 16px;
  }

  h1 {
    text-transform: capitalize;
    font-size: 18px;
    margin: 0;
    padding-bottom: 0px;

    a {
      color: #405361;
      text-decoration: none;
    }
  }

  p {
    margin: 0 auto 4px;
  }

  > div {
    display: flex;
    margin-bottom: 12px;

    span {
      object-fit: contain;
      align-self: flex-start;
    }

    p {
      margin: 0 0 0 auto;
    }
  }
`;
