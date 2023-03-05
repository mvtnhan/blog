import React from "react";

import BlockHeader from "./block-header.js";
import BlockWorkExp from "./block-work-exp.js";

export default function WorkExperience() {
  return (
    <div>
      <BlockHeader title="Work Experience" />
      <BlockWorkExp
        company="EASTPLAYERS"
        // year="03/2021 - Present"
        projectname="Front-end Developer"
        // description={<a href="null">Front-end Developer</a>}
      />

      <BlockWorkExp
        company="TMA Solutions"
        // year="03/2021 - Present"
        projectname="Front-end Developer"
        description={
          <a href="null">
            Translated designs, wireframe, and business requirements into code.
            <br /> Apply unit tests to ensure the correctness of applications.
          </a>
        }
      />
    </div>
  );
}
