import React, { Component } from "react";
import DesignProblem from "./DesignProblem/DesignProblem";
import { caseSecuritySettings } from "./content";
import { slides } from "./VideoSlider/content";
import { imageSlides } from "./ImageSlider/content";
import StudyCover from "./StudyCover/StudyCover";
import MyRole from "./MyRole/MyRole";
import "./Study.css";
import VideoSlider from "./VideoSlider/VideoSlider";
import ImageSlider from "./ImageSlider/ImageSlider";
import ProblemSolved from "./ProblemSolved/ProblemSolved";
import Impact from "./Impact/Impact";
import Lessons from "./Lessons/Lessons";
import videoS1P1 from "./VideoSlider/videos/p1 - s1.mp4";
import videoS1P2 from "./VideoSlider/videos/p1 - s2.mp4";
import videoS1P3 from "./VideoSlider/videos/p1 - s3.mp4";
import videoS1P4 from "./VideoSlider/videos/p1 - s4.mp4";
import imageS2P1 from "./ImageSlider/images/S2_P1.png";
import imageS2P2 from "./ImageSlider/images/S2_P2.png";
import imageS2P3 from "./ImageSlider/images/S2_P3.png";
import imageS2P4 from "./ImageSlider/images/S2_P4.png";
import imageS2P5 from "./ImageSlider/images/S2_P5.png";

class Study extends Component {
  render() {
    return (
      <div>
        <StudyCover
          h1Title={caseSecuritySettings[0].title}
          smallMetadata={caseSecuritySettings[0].metaData}
        />
        <hr className="rounded"></hr>
        <DesignProblem
          problemsObservedP1={caseSecuritySettings[0].problemsObservedP1}
          problemsObservedP2={caseSecuritySettings[0].problemsObservedP2}
          hypothesisP1={caseSecuritySettings[0].hypothesisP1}
          hypothesisP2={caseSecuritySettings[0].hypothesisP2}
          hypothesisP3={caseSecuritySettings[0].hypothesisP3}
          stakeholderRequestP1={caseSecuritySettings[0].stakeholderRequestP1}
          stakeholderRequestP2={caseSecuritySettings[0].stakeholderRequestP2}
          stakeholderRequestP3={caseSecuritySettings[0].stakeholderRequestP3}
          solveProblemP1={caseSecuritySettings[0].solveProblemP1}
          solveProblemP2={caseSecuritySettings[0].solveProblemP2}
          solveProblemP3={caseSecuritySettings[0].solveProblemP3}
          solveProblemP4={caseSecuritySettings[0].solveProblemP4}
        />
        <hr className="rounded"></hr>
        <MyRole
          collaborationP1={caseSecuritySettings[0].collaborationP1}
          collaborationP2={caseSecuritySettings[0].collaborationP2}
          collaborationP3={caseSecuritySettings[0].collaborationP3}
          collaborationP4={caseSecuritySettings[0].collaborationP4}
          facilitationP1={caseSecuritySettings[0].facilitationP1}
          facilitationP2={caseSecuritySettings[0].facilitationP2}
          impactP1={caseSecuritySettings[0].teamImpactP1}
        />
        <hr className="rounded"></hr>
        <VideoSlider
          title={"Proposed Solution"}
          videoS1P1={videoS1P1}
          titleS1P1={slides[0].title}
          highlightS1P1={slides[0].highlight}
          p1S1P1={slides[0].p1}
          p2S1P1={slides[0].p2}
          videoS1P2={videoS1P2}
          titleS1P2={slides[1].title}
          highlightS1P2={slides[1].highlight}
          p1S1P2={slides[1].p1}
          p2S1P2={slides[1].p2}
          videoS1P3={videoS1P3}
          titleS1P3={slides[2].title}
          highlightS1P3={slides[2].highlight}
          p1S1P3={slides[2].p1}
          p2S1P3={slides[2].p2}
          videoS1P4={videoS1P4}
          titleS1P4={slides[3].title}
          highlightS1P4={slides[3].highlight}
          p1S1P4={slides[3].p1}
          p2S1P4={slides[3].p2}
        />
        <hr className="rounded"></hr>
        <ProblemSolved
          solvedP_1={caseSecuritySettings[0].solvedP_1}
          solvedP_2={caseSecuritySettings[0].solvedP_2}
        />
        <hr className="rounded"></hr>
        <ImageSlider
          title={"Challenges"}
          imageS2P1={imageS2P1}
          titleS2P1={imageSlides[0].title}
          highlightS2P1={imageSlides[0].highlight}
          p1S2P1={imageSlides[0].p1}
          imageS2P2={imageS2P2}
          titleS2P2={imageSlides[1].title}
          highlightS2P2={imageSlides[1].highlight}
          p1S2P2={imageSlides[1].p1}
          imageS2P3={imageS2P3}
          titleS2P3={imageSlides[2].title}
          highlightS2P3={imageSlides[2].highlight}
          p1S2P3={imageSlides[2].p1}
          imageS2P4={imageS2P4}
          titleS2P4={imageSlides[3].title}
          highlightS2P4={imageSlides[3].highlight}
          p1S2P4={imageSlides[3].p1}
          imageS2P5={imageS2P5}
          titleS2P5={imageSlides[4].title}
          highlightS2P5={imageSlides[4].highlight}
          p1S2P5={imageSlides[4].p1}
        />
        <hr className="rounded"></hr>
        <Impact
          impactP1={caseSecuritySettings[0].impactP1}
          impactP2={caseSecuritySettings[0].impactP2}
        />
        <hr className="rounded"></hr>
        <Lessons
          lessonsP1={caseSecuritySettings[0].lessonsP1}
          lessonsP2={caseSecuritySettings[0].lessonsP2}
        />
      </div>
    );
  }
}

export default Study;
