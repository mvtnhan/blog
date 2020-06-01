import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";

export function Projects() {
  return (
    <div>
      <BlockHeader title="Projects" />
      <BlockContent className="BlockContentRight">
        <BlockProjects
          projectname="Realtime chat app"
          // company="Company / Institute Name"
          // location="Washington DC, United States of America"
          // year="2020"
          description="An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account."
        />
        <BlockProjects
          projectname="Todo app"
          // company="Company / Institute Name"
          // location="Washington DC, United States of America"
          // year="2020"
          description="An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account."
        />
      </BlockContent>
    </div>
  );
}

function BlockProjects(props) {
  return (
    <StyledBlockProject className="BlockProject">
      <h1>{props.projectname}</h1>
      <p>{props.company}</p>
      <div>
        <span>{props.location}</span>
        <p>{props.year}</p>
      </div>
      <span>{props.description}</span>
    </StyledBlockProject>
  );
}

BlockProjects.propTypes = {
  projectname: PropTypes.string.isRequired,
  //company: PropTypes.string.isRequired,
  // location: PropTypes.string.isRequired,
  // year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const StyledBlockProject = styled.div`
  &:before {
    content: "";
    display: block;
    padding-top: 8px;
  }

  :after {
    content: "";
    display: block;
    margin: 0;
    width: 56px;
    padding-top: 24px;
    margin-bottom: 16px;
    border-bottom: 1px solid #616161;
  }

  h1 {
    text-transform: uppercase;
    font-size: 18px;
    margin: 0;
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
