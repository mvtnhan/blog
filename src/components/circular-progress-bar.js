import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import "react-circular-progressbar/dist/styles.css";

import AnimatedCircularProgressBar from "./animated-circular-progress-bar.js";

export default function CircularProgressBar(props) {
  return (
    <StyledCircularProgressBar className={props.className}>
      <AnimatedCircularProgressBar
        valueStart={props.percentStart}
        valueEnd={props.percentEnd}
        duration={props.duration}
        easingFunction={easeQuadInOut}
      >
        {(value) => {
          return (
            <CircularProgressbar
              value={value}
              text={props.children}
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedCircularProgressBar>
    </StyledCircularProgressBar>
  );
}

CircularProgressBar.defaultProps = {
  percentStart: 0,
};

CircularProgressBar.propTypes = {
  children: PropTypes.string.isRequired,
  percentStart: PropTypes.number.isRequired,
  percentEnd: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

const StyledCircularProgressBar = styled.div`
  svg {
    overflow: unset;
  }

  .CircularProgressbar-trail,
  .CircularProgressbar-path {
    stroke-width: 10;
  }

  .CircularProgressbar-path {
    stroke: #405361;
  }

  .CircularProgressbar-text {
    fill: #405361;
    font-size: 24px;
    font-weight: bold;
  }

  .CircularProgressbar-background {
    fill: green;
  }
`;
