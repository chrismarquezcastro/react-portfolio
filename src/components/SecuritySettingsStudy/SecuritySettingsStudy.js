import React, { Component } from "react";
import "./Study.css";

/* Components */
import DesignProblem from "./DesignProblem/DesignProblem";
import StudyCover from "./StudyCover/StudyCover";
import MyRole from "./MyRole/MyRole";
import VideoSlider from "./VideoSlider/VideoSlider";
import ImageSlider from "./ImageSlider/ImageSlider";
import ProblemSolved from "./ProblemSolved/ProblemSolved";
import Impact from "./Impact/Impact";
import Lessons from "./Lessons/Lessons";

class Study extends Component {
  render() {
    /* De-structure props for cleaner code. */
    const {
      coverImage,
      h1Title,
      smallMetadata,
      problemsObservedP1,
      problemsObservedP2,
      hypothesisP1,
      hypothesisP2,
      hypothesisP3,
      stakeholderRequestP1,
      stakeholderRequestP2,
      stakeholderRequestP3,
      solveProblemP1,
      solveProblemP2,
      solveProblemP3,
      solveProblemP4,
      collaborationP1,
      collaborationP2,
      collaborationP3,
      collaborationP4,
      facilitationP1,
      facilitationP2,
      teamImpactP1,
      headingS1P1,
      videoS1P1,
      titleS1P1,
      highlightS1P1,
      p1S1P1,
      p2S1P1,
      videoS1P2,
      titleS1P2,
      highlightS1P2,
      p1S1P2,
      p2S1P2,
      videoS1P3,
      titleS1P3,
      highlightS1P3,
      p1S1P3,
      p2S1P3,
      videoS1P4,
      titleS1P4,
      highlightS1P4,
      p1S1P4,
      p2S1P4,
      solvedP1,
      solvedP2,
      imageS2P1,
      titleS2P1,
      highlightS2P1,
      p1S2P1,
      imageS2P2,
      titleS2P2,
      highlightS2P2,
      p1S2P2,
      imageS2P3,
      titleS2P3,
      highlightS2P3,
      p1S2P3,
      imageS2P4,
      titleS2P4,
      highlightS2P4,
      p1S2P4,
      imageS2P5,
      titleS2P5,
      highlightS2P5,
      p1S2P5,
      impactP1,
      impactP2,
      impactP3,
      lessonsP1,
      lessonsP2,
      lessonsP3,
    } = this.props;

    return (
      <div>
        <StudyCover
          coverImage={coverImage}
          h1Title={h1Title}
          smallMetadata={smallMetadata}
        />
        <hr className="rounded"></hr>
        <DesignProblem
          problemsObservedP1={problemsObservedP1}
          problemsObservedP2={problemsObservedP2}
          hypothesisP1={hypothesisP1}
          hypothesisP2={hypothesisP2}
          hypothesisP3={hypothesisP3}
          stakeholderRequestP1={stakeholderRequestP1}
          stakeholderRequestP2={stakeholderRequestP2}
          stakeholderRequestP3={stakeholderRequestP3}
          solveProblemP1={solveProblemP1}
          solveProblemP2={solveProblemP2}
          solveProblemP3={solveProblemP3}
          solveProblemP4={solveProblemP4}
        />
        <hr className="rounded"></hr>
        <MyRole
          collaborationP1={collaborationP1}
          collaborationP2={collaborationP2}
          collaborationP3={collaborationP3}
          collaborationP4={collaborationP4}
          facilitationP1={facilitationP1}
          facilitationP2={facilitationP2}
          teamImpactP1={teamImpactP1}
        />
        <hr className="rounded"></hr>
        <VideoSlider
          headingS1P1={headingS1P1}
          videoS1P1={videoS1P1}
          titleS1P1={titleS1P1}
          highlightS1P1={highlightS1P1}
          p1S1P1={p1S1P1}
          p2S1P1={p2S1P1}
          videoS1P2={videoS1P2}
          titleS1P2={titleS1P2}
          highlightS1P2={highlightS1P2}
          p1S1P2={p1S1P2}
          p2S1P2={p2S1P2}
          videoS1P3={videoS1P3}
          titleS1P3={titleS1P3}
          highlightS1P3={highlightS1P3}
          p1S1P3={p1S1P3}
          p2S1P3={p2S1P3}
          videoS1P4={videoS1P4}
          titleS1P4={titleS1P4}
          highlightS1P4={highlightS1P4}
          p1S1P4={p1S1P4}
          p2S1P4={p2S1P4}
        />
        <hr className="rounded"></hr>
        <ProblemSolved solvedP1={solvedP1} solvedP2={solvedP2} />
        <hr className="rounded"></hr>
        <ImageSlider
          headingS2P1={"Challenges"}
          imageS2P1={imageS2P1}
          titleS2P1={titleS2P1}
          highlightS2P1={highlightS2P1}
          p1S2P1={p1S2P1}
          imageS2P2={imageS2P2}
          titleS2P2={titleS2P2}
          highlightS2P2={highlightS2P2}
          p1S2P2={p1S2P2}
          imageS2P3={imageS2P3}
          titleS2P3={titleS2P3}
          highlightS2P3={highlightS2P3}
          p1S2P3={p1S2P3}
          imageS2P4={imageS2P4}
          titleS2P4={titleS2P4}
          highlightS2P4={highlightS2P4}
          p1S2P4={p1S2P4}
          imageS2P5={imageS2P5}
          titleS2P5={titleS2P5}
          highlightS2P5={highlightS2P5}
          p1S2P5={p1S2P5}
        />
        <hr className="rounded"></hr>
        <Impact impactP1={impactP1} impactP2={impactP2} impactP3={impactP3} />
        <hr className="rounded"></hr>
        <Lessons
          lessonsP1={lessonsP1}
          lessonsP2={lessonsP2}
          lessonsP3={lessonsP3}
        />
      </div>
    );
  }
}

export default Study;
