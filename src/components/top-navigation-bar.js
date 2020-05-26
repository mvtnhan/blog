import React from "react";
import styled from "styled-components";

import { Container } from "../pages/Homepage/moreWorks.js";

class TopNavBar extends React.Component {
  state = {
    menuOnTop: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  timeoutID = null;

  onScroll = () => {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.setState({
        menuOnTop: window.scrollY === 0,
      });
    }, 100);
  };

  render() {
    return (
      <MenuBar isOnTop={this.state.menuOnTop}>
        <Container>
          <div className="menuTopBar">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
          </div>
        </Container>
      </MenuBar>
    );
  }
}

export default TopNavBar;

const MenuBar = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => (props.isOnTop ? "transparent" : "white")};
  box-shadow: ${(props) =>
    props.isOnTop ? "none" : "rgba(0, 0, 0, 0.15) 0px 1px 4px 0px"};
  transition: background-color 250ms ease-in-out 0s,
    box-shadow 250ms ease-in-out 0s;

  .menuTopBar {
    overflow: hidden;
    display: flex;
    width: 100%;
  }

  .menuTopBar a {
    display: block;
    text-align: center;
    padding: 8px 8px;
    text-decoration: none;
    font-size: 18px;
    color: #895c32;
    position: relative;
  }

  .menuTopBar a {
    &::before {
      content: "";
      position: absolute;
      right: 100%;
      bottom: 8px;
      left: 8px;
      height: 1px;
      background: #895c32;
      opacity: 0.25;
      transition: all 0.35s ease-in-out;
    }

    &:hover {
      text-decoration: none;
      opacity: 1;

      &::before {
        right: 8px;
        opacity: 0.5;
      }
    }
  }
`;
