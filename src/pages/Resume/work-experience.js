import React from "react";
import BlockHeader from "./block-header.js";
import BlockWorkExp from "./block-work-exp.js";

export default function WorkExperience() {
  return (
    <div>
      <BlockHeader title="Work Experience" />
      <BlockWorkExp
        projectname="PHU THUAN THANH CO.LTD"
        year="2019-Present"
        description="Develop in-house components, translated designs, wireframe, and business requirements into code."
      />
    </div>
  );
}
