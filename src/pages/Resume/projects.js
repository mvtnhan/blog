import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";
import BlockProjects from "./block-projects.js";

export function Projects() {
  return (
    <StyledProjects>
      <BlockHeader title="Projects" />
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
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  margin-bottom: 24px;
`;
