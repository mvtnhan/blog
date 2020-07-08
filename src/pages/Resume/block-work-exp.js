import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function BlockWorkExp(props) {
  return (
    <StyledBlockWorkExp className="BlockContentRight">
      <div>
        <h1>{props.projectname}</h1>
        <p>{props.year}</p>
      </div>
      {/* <p>{props.company}</p>
      <span>{props.location}</span> */}
      <span>{props.description}</span>
    </StyledBlockWorkExp>
  );
}

BlockWorkExp.propTypes = {
  projectname: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const StyledBlockWorkExp = styled.div`
  padding: 24px;

  h1 {
    text-transform: uppercase;
    color: #405361;
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
