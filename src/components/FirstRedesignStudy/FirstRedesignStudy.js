import React from "react";

/* Components */
import DesignProblem from "./DesignProblem/DesignProblem";
import MyRole from "./MyRole/MyRole";
import StudyCover from "./StudyCover/StudyCover";

/* Content */
import { cover, designProblem, myRole } from "./content";

/* Images  */
import kwV1ActionsMenu from "./images/kw v1 actions menu.png";

const FirstRedesignStudy = () => {
  return (
    <div>
      <StudyCover h1Title={cover[0].title} smallMetadata={cover[0].metaData} />
      <hr className="rounded"></hr>
      <DesignProblem
        problemsObservedP1={designProblem[0].problemsObservedP1}
        problemsObservedP2={designProblem[0].problemsObservedP2}
        problemsObservedP3={designProblem[0].problemsObservedP3}
        hypothesisP1={designProblem[0].hypothesisP1}
        hypothesisP2={designProblem[0].hypothesisP2}
        hypothesisP3={designProblem[0].hypothesisP3}
        stakeholderRequestP1={designProblem[0].stakeholderRequestP1}
        stakeholderRequestP2={designProblem[0].stakeholderRequestP2}
        stakeholderRequestP3={designProblem[0].stakeholderRequestP3}
        solveProblemP1={designProblem[0].solveProblemP1}
        solveProblemP2={designProblem[0].solveProblemP2}
        solveProblemP3={designProblem[0].solveProblemP3}
        solveProblemP4={designProblem[0].solveProblemP4}
        kwV1ActionsMenu={kwV1ActionsMenu}
      />
      <hr className="rounded"></hr>
      <MyRole
        collaborationP1={myRole[0].collaborationP1}
        collaborationP2={myRole[0].collaborationP2}
        collaborationP3={myRole[0].collaborationP3}
        collaborationP4={myRole[0].collaborationP4}
        facilitationP1={myRole[0].facilitationP1}
        facilitationP2={myRole[0].facilitationP2}
        teamImpactP1={myRole[0].teamImpactP1}
      />
      <hr className="rounded"></hr>
    </div>
  );
};

export default FirstRedesignStudy;
