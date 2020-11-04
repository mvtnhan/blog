import React from "react";
import BlockHeader from "./block-header.js";
import BlockWorkExp from "./block-work-exp.js";

export default function WorkExperience() {
  return (
    <div>
      <BlockHeader title="Work Experience" />
      {/* <BlockWorkExp
        company="PHU THUAN THANH CO.LTD"
        year="2019-2020"
        description="Develop in-house components, translated designs, wireframe, and business requirements into code."
      /> */}
      <BlockWorkExp
        company="Eastplayers"
        year="2020-Present"
        description={
          <a href="https://www.cmenergy.vn/">
            Front-end Developer of Copper Mountain Energy.
          </a>
        }
      />
    </div>
  );
}
