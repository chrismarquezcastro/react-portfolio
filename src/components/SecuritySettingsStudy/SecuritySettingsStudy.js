import React, { Component } from "react";
import "../components.css";

/* Components */
import DesignProblem from "./components/DesignProblem/DesignProblem";
import StudyCover from "./components/StudyCover/StudyCover";
import MyRole from "./components/MyRole/MyRole";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ProblemSolved from "./components/ProblemSolved/ProblemSolved";
import Impact from "./components/Impact/Impact";
import Lessons from "./components/Lessons/Lessons";

/* Images */
import coverImageStudy from "./images/securitySettings.png";
import imageP1 from "./images/S2_P1.png";
import imageP2 from "./images/S2_P2.png";
import imageP3 from "./images/S2_P3.png";
import imageP4 from "./images/S2_P4.png";
import imageP5 from "./images/S2_P5.png";

/* Videos */
import videoP1 from "./videos/p1 - s1.mp4";
import videoP2 from "./videos/p1 - s2.mp4";
import videoP3 from "./videos/p1 - s3.mp4";
import videoP4 from "./videos/p1 - s4.mp4";

/* Content */
import {
  cover,
  designProblem,
  myRole,
  videoSlides,
  solutionSolved,
  imageSlides,
  impact,
  lessons,
} from "./content";

class Study extends Component {
  render() {
    return (
      <div>
        <StudyCover
          coverImage={coverImageStudy}
          h1Title={cover[0].title}
          smallMetadata={cover[0].metaData}
        />
        <hr className="rounded"></hr>
        <DesignProblem
          problemsObservedP1={designProblem[0].problemsObservedP1}
          problemsObservedP2={designProblem[0].problemsObservedP2}
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
        <VideoSlider
          heading={"Proposed Solution"}
          videoP1={videoP1}
          titleP1={videoSlides[0].title}
          highlightS1P1={videoSlides[0].highlight}
          p1P1={videoSlides[0].p1}
          p2P1={videoSlides[0].p2}
          videoP2={videoP2}
          titleP2={videoSlides[1].title}
          highlightP2={videoSlides[1].highlight}
          p1P2={videoSlides[1].p1}
          p2P2={videoSlides[1].p2}
          videoP3={videoP3}
          titleP3={videoSlides[2].title}
          highlightP3={videoSlides[2].highlight}
          p1P3={videoSlides[2].p1}
          p2P3={videoSlides[2].p2}
          videoP4={videoP4}
          titleP4={videoSlides[3].title}
          highlightP4={videoSlides[3].highlight}
          p1P4={videoSlides[3].p1}
          p2P4={videoSlides[3].p2}
        />
        <hr className="rounded"></hr>
        <ProblemSolved
          solvedP1={solutionSolved[0].p1}
          solvedP2={solutionSolved[0].p2}
        />
        <hr className="rounded"></hr>
        <ImageSlider
          heading={"Challenges"}
          imageP1={imageP1}
          titleP1={imageSlides[0].title}
          highlightP1={imageSlides[0].highlight}
          p1P1={imageSlides[0].p1}
          imageP2={imageP2}
          titleP2={imageSlides[1].title}
          highlightP2={imageSlides[1].highlight}
          p1P2={imageSlides[1].p1}
          imageP3={imageP3}
          titleP3={imageSlides[2].title}
          highlightP3={imageSlides[2].highlight}
          p1P3={imageSlides[2].p1}
          imageP4={imageP4}
          titleP4={imageSlides[3].title}
          highlightP4={imageSlides[3].highlight}
          p1P4={imageSlides[3].p1}
          imageP5={imageP5}
          titleP5={imageSlides[4].title}
          highlightP5={imageSlides[4].highlight}
          p1P5={imageSlides[4].p1}
        />
        <hr className="rounded"></hr>
        <Impact
          impactP1={impact[0].p1}
          impactP2={impact[0].p2}
          impactP3={impact[0].p3}
        />
        <hr className="rounded"></hr>
        <Lessons
          lessonsP1={lessons[0].p1}
          lessonsP2={lessons[0].p2}
          lessonsP3={lessons[0].p3}
        />
      </div>
    );
  }
}

export default Study;
