import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function BlockContent(props) {
  return (
    <StyledBlockContent className={props.className}>
      {props.children}
    </StyledBlockContent>
  );
}

BlockContent.propTypes = {
  children: PropTypes.element.isRequired,
};

const StyledBlockContent = styled.div`
  padding: 24px;
`;
