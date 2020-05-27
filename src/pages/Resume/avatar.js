import React from "react";
import styled from "styled-components";
import imgAvatar from "./images/avt.png";
export function Avatar() {
  return (
    <Avt>
      <div className="boxImg">
        <img src={imgAvatar} alt="img avatar" />
      </div>
    </Avt>
  );
}

const Avt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  margin: 48px 0;
  background-color: #f0f0f0;

  .boxImg {
    width: 130px;
    height: 130px;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
