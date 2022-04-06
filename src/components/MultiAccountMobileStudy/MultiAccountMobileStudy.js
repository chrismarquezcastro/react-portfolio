import React from "react";
import StudyCover from "../StudyCover/StudyCover";

/* Content */
import { cover } from "./content";

const MultiAccountMobileStudy = () => {
  return (
    <div>
      <StudyCover h1Title={cover[0].title} />
    </div>
  );
};

export default MultiAccountMobileStudy;
