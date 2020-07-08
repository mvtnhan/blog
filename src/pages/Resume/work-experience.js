import React from "react";
import BlockHeader from "./block-header.js";
import BlockWorkExp from "./block-work-exp.js";

export default function WorkExperience() {
  return (
    <div>
      <BlockHeader title="Work Experience" />
      <BlockWorkExp
        projectname="Freelancer"
        year="2019-2020"
        description="Translated designs, wireframe, and business requirements into code."
      />
    </div>
  );
}
