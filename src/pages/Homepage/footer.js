import React from "react";
import styled from "styled-components";

import { Social } from "../../constants.js";

import DesignElements from "./images/design-elements.png";
import GrayBackGround from "./images/section-bg-gray.jpg";

export function Footer() {
  const Sociallist = [
    {
      link: Social.email,
      img: "Email",
      content: "mvtnhan@gmail.com",
    },
    {
      link: Social.skype,
      img: "Skype",
      content: "Skype",
    },
    {
      link: Social.twitter,
      img: "Twitter",
      content: "Twitter",
    },
    {
      link: Social.Linkedin,
      img: "Linkedin",
      content: "Linkedin",
    },
  ];
  return (
    <StyledFooter>
      <p>Copyright © 2020 Web mvtnhan. Contact Preferred Via:</p>
      <div className="IconFooter">
        {Sociallist.map((social) => (
          <a
            href={social.link}
            key={social.content}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={social.img} alt="" />
          </a>
        ))}
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  background: url(${GrayBackGround});

  p {
    padding: 5px 0px 0px 32px;
    color: #535353;
  }

  .IconFooter {
    display: flex;
    padding: 16px 8px;

    a {
      margin-right: 5px;
      text-indent: -9999px;
    }

    img {
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .Email {
      background: url(${DesignElements}) no-repeat -191px -430px;

      &:hover {
        background: url(${DesignElements}) no-repeat -191px -462px;
      }
    }

    .Skype {
      background: url(${DesignElements}) no-repeat -223px -430px;

      &:hover {
        background: url(${DesignElements}) no-repeat -223px -462px;
      }
    }

    .Twitter {
      background: url(${DesignElements}) no-repeat -255px -430px;

      &:hover {
        background: url(${DesignElements}) no-repeat -255px -462px;
      }
    }

    .Linkedin {
      background: url(${DesignElements}) no-repeat -287px -430px;

      &:hover {
        background: url(${DesignElements}) no-repeat -287px -462px;
      }
    }
  }

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 540px) {
    p {
      display: none;
    }

    .IconFooter {
      margin: 0 auto;
    }
  }
`;
