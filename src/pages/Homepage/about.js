import React from "react";
import styled from "styled-components";

import { Container } from "../../components/container.js";
import CircleButton from "./circle-button";

import AboutWork from "./images/about-work-flow.png";
import GrayBackGround from "./images/section-bg-gray.jpg";
import ImgAbout from "./images/about.png";

const StyledCircleButton = styled(CircleButton)`
  left: 15px;
  top: 27px;
  font-size: 20px;

  em {
    font-size: 28px;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export function About() {
  return (
    <StyledAbout>
      <Container>
        <div className="AboutSectionOne">
          <img src={ImgAbout} alt="About" width="727" height="375" />
          <StyledCircleButton href="#">
            Craftsman <em>Photo</em>
          </StyledCircleButton>
          <article>
            <h2>My Greetings & Handshake to You</h2>
            <p>
              Welcome to my little place on the internet. I’m Nhan, a frontend
              engineer who loves working with JavaScript and ReactJS
            </p>
            <p>
              Working within the role of frontend. On each project I bring a
              diversified set of skills which have been gathered from projects
              of all sizes, versatile design styles and different markets.
            </p>
            <p>
              In addition to web development, I also have considerable
              experience in working with Android.
            </p>
          </article>
        </div>
        <div className="AboutSectionTwo">
          <article className="HardAndPlay">
            <h3>I Work Hard and Play Hard</h3>
            <p>
              I consider stable communication and quick response important
              factors of project success. So when working together I think of me
              & my client as one compact team in which everyone will listen to
              each other and try to do their best. I work with "open" design
              approach which means that client & customer (if it's possible) is
              constantly involved in project creation. So if you are ready to
              dig in with me and produce some great stuff which will not only
              look great but also achieve its goals. go get things rolling and
              &nbsp;
              <a href="mailto:mvtnhan@gmail.com">contact me</a>.
            </p>
          </article>
          <div className="GreatUX">
            <a href="#/">
              Defined<span>Purpose</span>
            </a>
            <a href="#/">
              Unique<span>Purpose</span>
            </a>
            <a href="#/">
              Quality<span>Purpose</span>
            </a>
            <strong>Efficient Web Presence</strong>
            <p className="Conclusion">GreatUX/UI</p>
          </div>
        </div>
      </Container>
    </StyledAbout>
  );
}

const StyledAbout = styled.section`
  background: url(${GrayBackGround});
  overflow: hidden;
  padding: 80px 0;

  article {
    h2,
    h3 {
      font-weight: 400;
      color: #9e331f;
      margin: 0;
    }

    h2 {
      margin-bottom: 5px;
      font-size: 46px;
    }

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 19px;
      line-height: 140%;
      margin: 8px 0 0 0;
      color: #535353;
    }
  }

  .AboutSectionOne {
    display: flex;
    margin-bottom: 16px;
  }

  .AboutSectionTwo {
    display: flex;
    align-items: center;

    .HardAndPlay {
      width: 513px;
    }

    .GreatUX {
      width: 455px;
      background: url(${AboutWork}) no-repeat left;
      position: relative;
      display: flex;
      padding-left: 6px;

      a {
        color: #ffffff;
        font-size: 22px;
        margin: 55px 13px;
        text-decoration: none;
        text-transform: uppercase;
      }

      span {
        display: block;
      }

      strong {
        font-size: 20px;
        color: #666666;
        font-weight: 400;
        width: 115px;
        position: absolute;
        right: 0px;
        top: 55px;
        text-align: center;
      }

      .Conclusion {
        font-size: 22px;
        color: #666666;
        margin: 159px 0 0 -179px;
      }
    }
  }

  @media (max-width: 980px) {
    .AboutSectionOne img,
    .AboutSectionTwo .GreatUX {
      display: none;
    }

    .AboutSectionTwo .HardAndPlay {
      width: 100%;
    }

    article {
      h2 {
        font-size: 28px;
      }
    }
  }
`;
