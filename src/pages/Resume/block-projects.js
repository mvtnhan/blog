import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function BlockProjects(props) {
  return (
    <StyledBlockProkect>
      <h1>{props.projectname}</h1>
      <p>{props.company}</p>
      <div>
        <span>{props.location}</span>
        <p>{props.year}</p>
      </div>
      <span>{props.description}</span>
    </StyledBlockProkect>
  );
}

BlockProjects.propTypes = {
  projectname: PropTypes.string.isRequired,
  //company: PropTypes.string.isRequired,
  // location: PropTypes.string.isRequired,
  // year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const StyledBlockProkect = styled.div`
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
