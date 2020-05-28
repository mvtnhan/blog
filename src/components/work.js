import styled from "styled-components";

export const Work = styled.div`
  margin-top: 8px;

  .titleProject {
    font-size: 18px;
    margin: 0;
  }

  .company {
    margin: 0 auto 4px;
  }

  .locationYear {
    display: flex;
    margin-bottom: 12px;

    span {
      object-fit: contain;
      align-self: flex-start;
    }

    p {
      margin: 0 0 0 auto;
    }
  }
`;
