import DesignElements from "../images/design-elements.png";
import { Image } from "semantic-ui-react";
import ImgIntro from "../images/intro.png";
import IntroBanner from "../images/intro-central-banner.png";
import IntroSmall from "../images/intro-small.png";
import React from "react";
import { Social } from "./Social.js";
import styled from "styled-components";

export function RenderIntro() {
  return (
    <Intro>
      <ImgScraftsman>
        <a className="Linkedin" href={Social.linkedin}>
          Linkedin
        </a>
        <a className="Twitter" href={Social.twitter}>
          Twitter
        </a>
        <AroundFindOutMore />
        <div className="FindOutMore">
          <Image href="#/" className="ImgFindOutMore">
            Find Out <span>More</span>
          </Image>
          <a className=" MyWorks" href="#/">
            My Works
          </a>
          <a className="AboutMe" href="#/">
            About Me
          </a>
          <a className="ContactInfo" href="#/">
            Contact Info
          </a>
        </div>
      </ImgScraftsman>
      <h2>
        Hello, I'm David, I'm a fresher on my way to be a frontend engineer
      </h2>
    </Intro>
  );
}

const ImgScraftsman = styled.div`
  margin: 0 auto;
  background: url(${ImgIntro}) no-repeat center 20px;
  height: 420px;
  width: 673px;
  position: relative;
`;

const AroundFindOutMore = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
  background: url(${DesignElements}) no-repeat 0px -430px;
  /* @include ImgDesign(0px, -430px); */
  left: 518px;
  bottom: 320px;
  transition-property: transform;
  transition-duration: 1s;
  animation-name: rotate;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Intro = styled.section`
  padding: 20px 0;
  font-family: Craftsmans, Arial, sans-serif;

  ${ImgScraftsman} {
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
    ${AroundFindOutMore} {
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
      width: 136px;
      left: 543px;
      bottom: 62px;
      text-align: center;
      position: relative;

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
        height: 30px;
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

    .ImgFindOutMore {
      width: 136px;
      height: 107px;
      position: relative;
      background: url(${DesignElements}) no-repeat 0px 0px;
      /* @include ImgDesign(0px, 0px); */
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
    font-size: 31.5px;
    padding: 20px 0 34px 0;
    margin: 35px 0 0 0;
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
    ${ImgScraftsman} {
      background: url(${IntroSmall}) no-repeat center 20px;
      height: 320px;
      width: 290px;

      ${AroundFindOutMore} {
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
