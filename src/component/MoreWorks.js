import BgWorks from "../images/worksbg.jpg";
import CloudVPS from "../images/cloudvps.png";
import DesignElements from "../images/design-elements.png";
import FFVentureCapital from "../images/ff-venture-capital.png";
import Host365 from "../images/host365.png";
import ImgWorks from "../images/works.png";
import LestHost from "../images/lets-host.png";
import MedievalWall from "../images/medieval-wall.png";
import RavenDB from "../images/ravendb.png";
import React from "react";
import styled from "styled-components";

export function RenderMoreWorks() {
  return (
    <MoreWorks>
      <Container>
        <a href="#/" className="LeftTop">
          <img src={LestHost} alt="LesHost" />
        </a>
        <a href="#/" className="LeftMid">
          <img src={FFVentureCapital} alt="ff VentureCapital" />
        </a>
        <a href="#/" className="LeftBot">
          <img src={RavenDB} alt="RavenDB" />
        </a>
        <a href="#/" className="RightTop">
          <img src={CloudVPS} alt="CloudVPS" />
        </a>
        <a href="#/" className="RightMid">
          <img src={Host365} alt="Host365" />
        </a>
        <a href="#/" className="RightBot">
          <img src={MedievalWall} alt="MedievalWall" />
        </a>
        <a href="#/" className="ImgMoreWorks">
          <em>More</em> Works
        </a>
        <span className="QuestionOpened">“</span>
        <p>
          On every project my goal is to create an functional and consistent UX
          which serves its main purpose. I always check if every detail is in
          the right place and implemented according to the latest web standards.
        </p>
        <span className="QuestionClosed">”</span>
      </Container>
    </MoreWorks>
  );
}

// const ImgMoreWorks = styled.a`
//   position: absolute;
//   left: 270px;
//   bottom: 315px;
//   width: 103px;
//   height: 80px;
//   font-weight: 300;
//   display: block;
//   color: #ffffff;
//   text-transform: uppercase;
//   background: url(${DesignElements}) no-repeat 0px -310px !important;
//   /* @include ImgDesign(0px, -310px); */
//   transition: transform 1s;
//   overflow: hidden;
//   transform: rotate(0deg);
//   line-height: 28px;
//   padding: 24px 0 0 0;
//   text-align: center;
//   font-size: 30px;
//   &:hover {
//     transform: rotate(-15deg);
//   }
// `;

const Container = styled.div`
  max-width: 984px;
  margin: 0 auto;
  clear: both;
  height: 685px;
  background: url(${ImgWorks}) no-repeat center 75px;
  position: relative;
  margin: 0 auto;

  a {
    background: url(${DesignElements}) no-repeat 0px -136px;
    /* @include ImgDesign(0px, -136px); */
    display: block;
    width: 174px;
    height: 174px;
    position: absolute;
    img {
      width: 160px;
      height: 160px;
      margin: 7px;
    }
  }

  .ImgMoreWorks {
    position: absolute;
    left: 270px;
    bottom: 315px;
    width: 103px;
    height: 80px;
    font-weight: 300;
    display: block;
    color: #ffffff;
    text-transform: uppercase;
    background: url(${DesignElements}) no-repeat 0px -310px;
    /* @include ImgDesign(0px, -310px); */
    transition: transform 1s;
    overflow: hidden;
    transform: rotate(0deg);
    line-height: 28px;
    padding: 24px 0 0 0;
    text-align: center;
    font-size: 30px;
    &:hover {
      transform: rotate(-15deg);
    }

    em {
      font-size: 32px;
      letter-spacing: 4px;
      clear: both;
      display: block;
    }
  }

  span {
    font-size: 40px;
    color: #9e3322;
    width: 13px;
    height: 12px;
    position: absolute;
  }

  .QuestionOpened {
    left: 304px;
    top: 505px;
  }

  .QuestionClosed {
    right: 360px;
    bottom: 100px;
  }

  p {
    text-align: center;
    margin: 505px auto auto 305px;
    position: absolute;
    color: #333333;
    width: 375px;
    font-size: 18px;
    line-height: 130%;
  }

  .LeftTop {
    left: 90px;
    top: 58px;
  }

  .LeftMid {
    left: 10px;
    top: 253px;
  }

  .LeftBot {
    left: 90px;
    top: 448px;
  }

  .RightTop {
    right: 90px;
    top: 58px;
  }

  .RightMid {
    right: 10px;
    top: 253px;
  }

  .RightBot {
    right: 90px;
    top: 448px;
  }
`;

const MoreWorks = styled.section`
  background: url(${BgWorks}) repeat-x left top;
  margin: 100px 0 0 0;
  font-family: Craftsmans, Arial, sans-serif;

  @media (max-width: 980px) {
    ${Container} {
      width: 768px;
      background-size: 245px auto;
      margin: 0 auto;

      .ImgMoreWorks {
        left: 200px;
        bottom: 350px;
      }

      .QuestionOpened {
        left: 276px;
        top: 430px;
      }

      .QuestionClosed {
        right: 290px;
        bottom: 107px;
      }
    }

    p {
      text-align: center;
      margin: 430px auto auto 280px;
      position: absolute;
      color: #333333;
      width: 210px;
      font-size: 18px;
      line-height: 130%;
    }
  }

  @media (max-width: 860px) {
    ${Container} {
      width: 540px;
      background: none;

      .ImgMoreWorks {
        left: 222px;
        bottom: 290px;
      }

      .QuestionOpened,
      .QuestionClosed,
      p {
        display: none;
      }
    }
  }

  @media (max-width: 540px) {
    display: none;
  }
`;
