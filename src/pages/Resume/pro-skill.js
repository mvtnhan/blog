import { useSpring, animated } from "react-spring";
import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

export function ProSkill() {
  const props = useSpring({ value: 100, from: { value: 0 } });
  //const AnimatedDonut = animated(Donut);
  return (
    <Skill>
      <BlockHeader title="Pro Skill" />
      {/* AnimatedDonut percent={props.value} */}
    </Skill>
  );
}

const Skill = styled.div`
  margin-bottom: 48px;
`;
