import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";

export function AboutMe() {
  return (
    <About>
      <BlockHeader title="About me" />
      <BlockContent className="BlockContentRight">
        <p className="textAboutMe">
          Hi, <br />
          I'm Nhan. I'm a fresher on my way to be a frontend engineer. I
          consider myself a positive person as I’ve never hesitated to encounter
          new challenges. With my passion, I’m willing to learn and able to work
          under a high workload so that I can have a chance to create a better
          version of myself day after day.
        </p>
      </BlockContent>
    </About>
  );
}

const About = styled.div`
  .textAboutMe {
    font-size: 16px;
    line-height: 22px;
    margin: 0;
    color: #1e1c27;
  }
`;
