import React from "react";
import BlockHeader from "./block-header.js";
import BlockWorkExp from "./block-work-exp.js";

export default function WorkExperience() {
  return (
    <div>
      <BlockHeader title="Work Experience" />
      <BlockWorkExp
        company="Eastplayers"
        // year="2020-Present"
        description={
          <a href="https://www.cmenergy.vn/">
            Front-end Developer of Copper Mountain Energy. Translated designs,
            wireframe, and business requirements into code.
          </a>
        }
      />

      <BlockWorkExp
        company="TMA Solutions"
        // year="2020-Present"
        description={
          <a
          //href="https://www.cmenergy.vn/"
          >
            Front-end Developer
          </a>
        }
      />
    </div>
  );
}
