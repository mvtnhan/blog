import AboutWork from "../images/about-work-flow.png";
import DesignElements from "../images/design-elements.png";
import ImgAbout from "../images/about.png";
import React from "react";
import styled from "styled-components";

export function RenderAbout() {
  return (
    <About>
      <div className="AboutSectionOne">
        <img src={ImgAbout} alt="About" width="727" height="375" />
        <a href="#/" className="PhotoMore">
          Craftsman <em>Photo</em>
        </a>
        <article>
          <h2>My Greetings & Handshake to You</h2>
          <p>
            Welcome to my little place on the internet. I’m Marijan, Web
            Designer and UX professional working with{" "}
            <a href="#/">Booking.com</a> on world's #1 accomodation site.
          </p>
          <p>
            Working within role of Web and UX Designer since 2006. On each
            project I bring a diversified set of skills which have been gathered
            from projects of all sizes, versatile design styles and different
            markets.
          </p>
          <p>
            I’m specialized in web design and development using handwritten
            HTML, CSS and jQuery framework. Love working with WordPress, also
            have considerable experience with other platforms as well.
          </p>
        </article>
      </div>
      <div className="AboutSectionTwo">
        <article className="HardAndPlay">
          <h3>I Work Hard and Play Hard </h3>
          <p>
            I consider stable communication and quick response important factors
            of project success. So when working together I think of me & my
            client as one compact team in which everyone will listen to each
            other and try to do their best. I work with "open" design approach
            which means that client & customer (if it's possible) is constantly
            involved in project creation. So if you are ready to dig in with me
            and produce some great stuff which will not only look great but also
            achieve its goals, go get things rolling and{" "}
            <a href="#/">Contact me</a>
          </p>
        </article>
        <div className="GreatUX">
          <a href="#/">
            Defined<span>Purpose</span>
          </a>
          <a href="#/">
            Defined<span>Purpose</span>
          </a>
          <a href="#/">
            Defined<span>Purpose</span>
          </a>
          <strong>Efficient Web Presence</strong>
          <p className="Conclusion">GreatUX/UI</p>
        </div>
      </div>
    </About>
  );
}

const About = styled.div`
  overflow: hidden;
  padding-top: 80px;

  max-width: 984px;
  margin: 0 auto;
  clear: both;

  .AboutSectionOne,
  .AboutSectionTwo {
    display: flex;
    position: relative;

    .PhotoMore {
      font-family: Craftsmans, Arial, sans-serif;
      left: 15px;
      top: 15px;
      font-size: 20px;
      width: 100px;
      height: 101px;
      font-weight: 300;
      display: block;
      position: absolute;
      color: #fff;
      text-transform: uppercase;
      background: url(${DesignElements}) no-repeat 0px -310px;
      border: 0px;
      transition: transform 1s;
      overflow: hidden;
      transform: rotate(0deg);
      line-height: 28px;
      padding: 24px 0 0 0;
      text-align: center;

      &:hover {
        transform: rotate(-15deg);
      }

      em {
        font-size: 30px;
        letter-spacing: 2px;
        clear: both;
        display: block;
      }
    }

    article {
      margin: 0 0 80px 0;
      overflow: hidden;

      h2 {
        color: #9e331f;
        margin-bottom: 5px;
        font-size: 38px;
      }

      p {
        font-size: 19px;
        margin: 15px 0 0 0;
        line-height: 140%;
      }

      h3 {
        color: #9e331f;
        font-size: 30px;
      }
    }

    .HardAndPlay {
      width: 513px;
    }

    .GreatUX {
      width: 455px;
      height: 165px;
      background: url(${AboutWork}) no-repeat left;
      margin: 20px 0 0 5px;
      position: relative;
      display: flex;
      padding-left: 6px;

      a {
        margin-top: 50px;
        color: #ffffff;
        font-size: 22px;
        margin: 50px 13px;
      }

      span {
        display: block;
      }

      strong {
        font-size: 20px;
        color: #666666;
        font-weight: 400;
        width: 115px;
        height: 50px;
        position: absolute;
        right: 0px;
        top: 50px;
        text-align: center;
        line-height: 110%;
      }

      .Conclusion {
        clear: both;
        font-size: 22px;
        color: #666666;
        margin: 159px 0 0 -179px;
      }
    }
  }

  @media (max-width: 980px) {
    width: 768px;

    .GreatUX {
      margin: 96px 0 0 20px;
    }

    img {
      display: block;
      width: 330px;
      height: 330px;
    }

    h2 {
      font-size: 30px !important;
    }

    p {
      font-size: 17px !important;
    }

    .AboutSectionOne,
    .AboutSectionTwo {
      .HardAndPlay {
        width: 360px !important;
      }
      .GreatUX {
        margin: 96px 0 0 20px;
      }

      strong {
        width: 100px !important;
        top: 40px !important;
        right: -10px !important;
      }
    }
  }

  @media (max-width: 860px) {
    width: 580px;

    img,
    .PhotoMore,
    .GreatUX {
      display: none !important;
    }

    h2 {
      font-size: 30px !important;
    }

    p {
      font-size: 17px !important;
    }

    .AboutSectionOne,
    .AboutSectionTwo {
      padding: 10px;

      .HardAndPlay {
        width: 760px !important;
      }

      strong {
        right: -30px !important;
      }
    }
  }

  @media (max-width: 540px) {
    width: 100%;

    .AboutSectionOne,
    .AboutSectionTwo {
      padding: 20px;
    }
  }
`;
