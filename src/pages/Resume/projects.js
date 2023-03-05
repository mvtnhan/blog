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
            link="https://cmenergy.vn"
            projectname="Copper Mountain Energy"
            description="Translated designs, wireframe, and business requirements into code."
          />
          <BlockProjects
            link="https://minesweeper-mvtnhan.vercel.app"
            projectname="Minesweeper"
            description="A Game using reactjs, react-hooks, custom-hooks and ant-design."
          />
          <BlockProjects
            link="https://gym-mvtnhan.vercel.app"
            projectname="Gym"
            description="A gym website, using Reactjs with RapidAPI."
          />
          <BlockProjects
            link="https://wav-to-midi-mvtnhan.vercel.app"
            projectname="WAV to MIDI"
            description="Building a simple online WAV to MIDI converter using ReactJS, TypeScript, NextJS and Styled-Component."
          />
          <BlockProjects
            link="https://fun-with-ai-mvtnhan.vercel.app"
            projectname="Chat With AI GPT-3"
            description="GPT-3 is a powerful AI model created by OpenAI."
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
