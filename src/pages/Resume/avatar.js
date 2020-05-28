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
  height: 16%;
  margin: 40px 0;
  background-color: #ececec;

  .boxImg {
    width: 146px;
    height: 146px;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
