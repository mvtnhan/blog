import { Tooltip } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import CircleButton from "./circle-button";

import BgContact from "./images/contactbg.jpg";
import DesignElements from "./images/design-elements.png";
import ImgContact from "./images/contact.png";
import Skills from "./images/skills.png";

const StyledCircleButton = styled(CircleButton)`
  left: 410px;
  bottom: 10px;
  font-size: 25px;
  em {
    font-size: 30px;
  }
  @media (max-width: 860px) {
    left: 404px;
  }
  @media (max-width: 540px) {
    left: 40%;
  }
`;

export function Contact() {
  return (
    <StyledContact>
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
        </div>
        <StyledCircleButton href="#">
          <em>Send</em> Message
        </StyledCircleButton>
      </Container>
    </StyledContact>
  );
}

const Container = styled.div`
  max-width: 984px;
  margin: 0 auto;
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
      margin-bottom: 10px;
    }

    textarea {
      width: 431px;
      height: 155px;
      padding: 9px 15px 0 15px;
      background: url(${DesignElements}) no-repeat -174px -102px;
      resize: none;
    }
  }

  .SkillsImg {
    width: 200px;
    position: absolute;
    right: 80px;
  }

  .ContactImg {
    top: -30px;
    right: 40px;
    position: absolute;
  }
`;

const StyledContact = styled.section`
  background: url(${BgContact}) repeat-x left top;
  padding: 77px 0 30px;

  @media (max-width: 980px) {
    ${Container} {
      width: 768px;
      .SkillsImg {
        display: none;
      }

      .ContactImg {
        top: -20px !important;
        right: 8px !important;
        width: 300px;
        height: 260px;
      }
    }
  }

  @media (max-width: 860px) {
    ${Container} {
      width: 526px;
      justify-content: center;

      .ContactImg {
        display: none;
      }
    }
  }

  @media (max-width: 540px) {
    padding: 80px 0 30px;
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
    }
  }
`;
