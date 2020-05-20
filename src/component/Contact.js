import BgContact from "../images/contactbg.jpg";
import DesignElements from "../images/design-elements.png";
import ImgContact from "../images/contact.png";
import React from "react";
import Skills from "../images/skills.png";
import { Tooltip } from "@material-ui/core";
import styled from "styled-components";

export function RenderContact() {
  return (
    <Contact>
      <Container>
        <form>
          <input type="text" name="Name" id="Name" placeholder="Name" />
          <input type="text" name="Email" id="Email" placeholder="Email" />
          <textarea
            name="Message"
            id="Message"
            rows="9"
            cols="26"
            placeholder="How can I help you?"
          />
        </form>
        <img
          src={ImgContact}
          alt="ContactMe"
          className="ContactImg"
          width="470"
          height="400"
        />

        <div className="SkillsImg">
          <Tooltip
            title="HTML5 Powered with CSS3 / Styling, Device Access, Performance & Integration, and Semantics"
            placement="bottom"
          >
            <img src={Skills} width="225" height="75" alt="Skill.img" />
          </Tooltip>
          {/* <Popup
            className="TooltipCraftsman"
            trigger={<Image src={Skills} width="225" height="75" />}
            content="HTML5 Powered with CSS3 / Styling, Device Access, Performance & Integration, and Semantics"
            position="bottom center"
          /> */}
        </div>
        <a href="#/" className="ImgSendMessage">
          <em>Send</em>Message
        </a>
      </Container>
    </Contact>
  );
}

const Container = styled.div`
  max-width: 984px;
  margin: 0 auto;
  clear: both;
  display: flex;
  position: relative;

  form {
    width: 512px;
    position: relative;
    overflow: hidden;
    padding-bottom: 50px;
    margin-top: 7px;

    input,
    textarea {
      border: 0px;
      outline: 0;
      border-radius: 15px;
      color: #000000;
    }

    input {
      width: 431px;
      height: 31px;
      padding: 3px 15px 0 15px;
      background: url(${DesignElements}) no-repeat -174px 0px;
      /* @include ImgDesign(-174px, 0px); */
      margin-bottom: 10px;
    }

    textarea {
      width: 431px;
      height: 155px;
      padding: 9px 15px 0 15px;
      background: url(${DesignElements}) no-repeat -174px -102px;
      /* @include ImgDesign(-174px, -102px); */
      resize: none;
    }
  }

  .ImgSendMessage {
    font-family: Craftsmans, Arial, sans-serif;
    left: 380px;
    bottom: 10px;
    font-size: 25px;
    width: 100px;
    height: 77px;
    font-weight: 300;
    display: block;
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    background: url(${DesignElements}) no-repeat 0px -310px;
    /* @include ImgDesign(0px, -310px); */
    border: 0px;
    transition: transform 1s;
    overflow: hidden;
    transform: rotate(0deg);
    line-height: 28px;
    padding: 24px 0 0 0;
    text-align: center;

    &:hover {
      transform: rotate(15deg);
    }

    em {
      font-size: 30px;
      letter-spacing: 5px;
      clear: both;
      display: block;
      padding-left: 5px;
    }
  }

  .SkillsImg {
    width: 200px;
    position: absolute;
    right: 80px;
  }

  .ContactImg {
    top: 0px;
    right: 40px;
    position: absolute;
  }
`;

const Contact = styled.section`
  background: url(${BgContact}) repeat-x left top;
  overflow: hidden;
  padding: 60px 0 0 0;
  height: 420px;

  @media (max-width: 980px) {
    ${Container} {
      width: 768px;

      .SkillsImg {
        display: none;
      }

      .ContactImg {
        top: -20px !important;
        right: 30px !important;
        width: 300px;
        height: 260px;
      }
    }
  }

  @media (max-width: 860px) {
    ${Container} {
      width: 580px;
      justify-content: center;

      .ContactImg {
        display: none;
      }

      .ImgSendMessage {
        left: 444px;
      }
    }
  }

  @media (max-width: 540px) {
    ${Container} {
      width: 100%;

      form {
        display: flex;
        width: 512px;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        padding-bottom: 50px;
        margin-top: 7px;
        align-items: center;
        input,
        textarea {
          width: 300px;
        }
      }

      .ImgSendMessage {
        left: 0px;
      }
    }
  }
`;
