import React from "react";
import styled from "styled-components";

import { Social } from "../../constants.js";

import DesignElements from "./images/design-elements.png";
import GrayBackGround from "./images/section-bg-gray.jpg";
import ImgIntro from "./images/intro.png";
import IntroBanner from "./images/intro-central-banner.png";
import IntroSmall from "./images/intro-small.png";
import Logo from "./images/Logo.png";
import Rope from "./images/logo-rope.png";

function renderFindOutMore() {
  return (
    <>
      <div className="FindOutMoreBorder" />
      <div className="FindOutMore">
        <div href="#/" className="FindOutMoreTrigger">
          Find Out <span>More</span>
        </div>
        <a className="MyWorks" href="#/">
          My Works
        </a>
        <a className="AboutMe" href="#/">
          About Me
        </a>
        <a className="ContactInfo" href="#/">
          Contact Info
        </a>
      </div>
    </>
  );
}

export function Intro() {
  return (
    <StyledIntro>
      <Banner>
        <h1>
          <img src={Logo} alt="My banner" />
        </h1>
      </Banner>
      <div className="Scraftsman">
        <a className="Linkedin" href={Social.linkedin}>
          Linkedin
        </a>
        <a className="Twitter" href={Social.twitter}>
          Twitter
        </a>
        {renderFindOutMore()}
      </div>
      <h2>Hi, I'm Nhan. I'm a fresher on my way to be a frontend engineer</h2>
    </StyledIntro>
  );
}

const Banner = styled.div`
  height: 125px;
  padding: 20px;
  max-width: 984px;
  margin: 0 auto;

  h1 {
    width: 565px;
    background: url(${Rope}) no-repeat center top;
    padding: 38px;
    position: absolute;

    img {
      padding: 0;
      margin: 0;
      transition: transform 1s;
      &:hover {
        transform: rotate(1.9deg);
      }
    }
  }

  @media (max-width: 980px) {
    width: 768px;
  }

  @media (max-width: 860px) {
    display: none;
    width: 580px;
  }
`;

const StyledIntro = styled.section`
  padding-top: 24px;
  padding-bottom: 100px;
  background: url(${GrayBackGround});

  .Scraftsman {
    margin: 0 auto;
    background: url(${ImgIntro}) no-repeat center 20px;
    height: 420px;
    width: 673px;
    position: relative;

    .Linkedin:link {
      width: 108px;
      height: 33px;
      position: absolute;
      left: 45px;
      top: 149px;
    }

    .Twitter:link {
      width: 125px;
      height: 32px;
      position: absolute;
      left: 38px;
      top: 182px;
    }

    .FindOutMoreBorder {
      position: absolute;
      left: 518px;
      bottom: 320px;
      width: 190px;
      height: 190px;
      background: url(${DesignElements}) no-repeat 0px -430px;
      transition-property: transform;
      transition-duration: 1s;
      animation-name: rotate;
      animation-duration: 20s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    }

    .FindOutMore {
      position: relative;
      width: 136px;
      left: 543px;
      bottom: 62px;
      text-align: center;

      span {
        top: 60px;
        font-size: 47px;
        left: 18px;
        position: absolute;
        transition: all 0.4s ease-in-out 0s;
      }

      a {
        left: 18px;
        top: 18px;
        height: 25px;
        width: 100px;
        position: absolute;
        transition: all 0.4s ease-in-out 0s;
        background-color: #9e3320;
        color: #ffffff;
        font-size: 20px;
        border-radius: 50%;
        padding: 37px 0;
      }

      &:hover .MyWorks {
        left: -40px;
        top: -73px;
      }

      &:hover .AboutMe {
        left: 125px;
        top: 18px;
      }

      &:hover .ContactInfo {
        left: -40px;
        top: 112px;
      }
    }

    .FindOutMoreTrigger {
      width: 136px;
      height: 107px;
      position: relative;
      background: url(${DesignElements}) no-repeat 0px 0px;
      text-transform: uppercase;
      color: #ffffff;
      font-size: 25px;
      text-align: center;
      padding: 29px 0 0 0;
      letter-spacing: 0px;
      font-weight: 300;
      transform: rotate(-15deg);
      transition: transform 1s;
      z-index: 1;
      cursor: pointer;

      &:hover {
        transform: rotate(0deg);
      }

      p {
        font-size: 40px;
        font-style: normal;
        line-height: 40px;
        letter-spacing: normal;
        margin: 60px 0 0 10px;
      }
    }
  }

  a,
  a:link {
    color: #9e3320;
    outline: none;
    text-decoration: none;
  }

  .Linkedin,
  .Twitter {
    display: block;
    text-indent: -9999px;
  }

  h2 {
    text-align: center;
    background: url(${IntroBanner}) no-repeat center top;
    font-weight: 400;
    color: #ffffff;
    font-size: 35px;
    padding: 16px 0 23px 0;
    margin: 35px 0 0 0;
    text-shadow: #4f1d15 -1px -1px 1px;
  }

  @media (max-width: 980px) {
    h2 {
      background-size: 768px;
      font-size: 26px;
      padding-top: 13px;
      margin-top: 25px;
    }
  }

  @media (max-width: 860px) {
    padding-top: 32px;

    .Scraftsman {
      background: url(${IntroSmall}) no-repeat center 20px;
      height: 320px;
      width: 290px;

      .FindOutMoreBorder {
        top: 155px;
        left: 12px;
      }

      .FindOutMore {
        left: 40px;
        top: 180px;
      }
    }

    h2 {
      display: none;
    }
  }
`;
