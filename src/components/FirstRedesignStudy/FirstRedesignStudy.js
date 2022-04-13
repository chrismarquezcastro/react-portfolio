import React from "react";

/* Components */
import DesignProblem from "./components/DesignProblem/DesignProblem";
import MyRole from "./components/MyRole/MyRole";
import StudyCover from "./components/StudyCover/StudyCover";
import ProposedSolution from "./components/ProposedSolution/ProposedSolution";
import ProblemSolved from "./components/ProblemSolved/ProblemSolved";
import Challenges from "./components/Challenges/Challenges";
import Impact from "./components/Impact/Impact";
import Lessons from "./components/Lessons/Lessons";

/* Content */
import {
  cover,
  designProblem,
  myRole,
  proposedSolution,
  problemSolved,
  challenges,
  impact,
  lessons,
} from "./content";

/* Images  */
import V1ActionsTablet from "./images/v1_actions_tablet.png";
import V1DashboardTablet from "./images/V1_dashboard_tablet.png";
import V1ActionsPhone from "./images/v1_movetray_actions_phone.png";
import V2HomeTablet from "./images/v2_home_tablet.png";
import V2ActionsPhone from "./images/v2_actions_phone.png";
import V2MailTablet from "./images/v2_mail_tablet.png";
import V2ViewerCamera from "./images/v2_viewer_camera.png";
import V2HomeFiles from "./images/v2_home_files.png";
import s1Challenge from "./images/challenge_1.png";
import s2Challenge from "./images/challenge_2.png";
import s3Challenge from "./images/challenge_3.png";
import coverImage from "./images/cover.png";

import "./components/components.css";

const FirstRedesignStudy = () => {
  return (
    <div>
      <StudyCover
        h1Title={cover[0].title}
        smallMetadata={cover[0].metaData}
        coverImage={coverImage}
      />
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
        V1ActionsTablet={V1ActionsTablet}
        V1DashboardTablet={V1DashboardTablet}
        V1ActionsPhone={V1ActionsPhone}
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
      <ProposedSolution
        V2HomeTablet={V2HomeTablet}
        s1Title={proposedSolution[0].title}
        s1Highlight={proposedSolution[0].highlight}
        s1P1={proposedSolution[0].p1}
        V2ActionsPhone={V2ActionsPhone}
        s2Title={proposedSolution[1].title}
        s2Highlight={proposedSolution[1].highlight}
        s2P1={proposedSolution[1].p1}
        V2MailTablet={V2MailTablet}
        s3Title={proposedSolution[2].title}
        s3Highlight={proposedSolution[2].highlight}
        s3P1={proposedSolution[2].p1}
        V2ViewerCamera={V2ViewerCamera}
        s4Title={proposedSolution[3].title}
        s4Highlight={proposedSolution[3].highlight}
        s4P1={proposedSolution[3].p1}
        V2HomeFiles={V2HomeFiles}
        s5Title={proposedSolution[4].title}
        s5Highlight={proposedSolution[4].highlight}
        s5P1={proposedSolution[4].p1}
      />
      <hr className="rounded"></hr>
      <ProblemSolved
        usersDoNowP1={problemSolved[0].usersDoNowP1}
        lifeImprovementsP1={problemSolved[0].lifeImprovementsP1}
      />
      <hr className="rounded"></hr>
      <Challenges
        s1Challenge={s1Challenge}
        s1Title={challenges[0].title}
        s1Highlight={challenges[0].highlight}
        s1P1={challenges[0].p1}
        s2Challenge={s2Challenge}
        s2Title={challenges[1].title}
        s2Highlight={challenges[1].highlight}
        s2P1={challenges[1].p1}
        s3Challenge={s3Challenge}
        s3Title={challenges[2].title}
        s3Highlight={challenges[2].highlight}
        s3P1={challenges[2].p1}
      />
      <hr className="rounded"></hr>
      <Impact impactP1={impact[0].customers} impactP2={impact[0].kiteworks} />
      <hr className="rounded"></hr>
      <Lessons lessonsP1={lessons[0].personal} lessonsP2={lessons[0].team} />
    </div>
  );
};

export default FirstRedesignStudy;
