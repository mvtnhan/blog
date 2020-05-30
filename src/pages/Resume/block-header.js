import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function BlockHeader(props) {
  return <StyledBlockHeader>{props.title}</StyledBlockHeader>;
}

BlockHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const StyledBlockHeader = styled.div`
  padding: 8px 0 8px 24px;
  border-radius: 0 50px 50px 0;
  background-color: #405361;
  text-transform: uppercase;
  color: white;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`;
