import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

/* Components */
import Resume from "./components/Resume/Resume";
import SecuritySettingsStudy from "./components/SecuritySettingsStudy/SecuritySettingsStudy";
import MultiAccountMobileStudy from "./components/MultiAccountMobileStudy/MultiAccountMobileStudy";

/* Content */
import { caseSecuritySettings } from "./components/SecuritySettingsStudy/content";
import { videoSlides } from "./components/SecuritySettingsStudy/VideoSlider/content";
import { imageSlides } from "./components/SecuritySettingsStudy/ImageSlider/content";

/* Videos */
import videoS1P1 from "../src/videos/p1 - s1.mp4";
import videoS1P2 from "../src/videos/p1 - s2.mp4";
import videoS1P3 from "../src/videos/p1 - s3.mp4";
import videoS1P4 from "../src/videos/p1 - s4.mp4";

/* Images */
import coverImageStudy1 from "../src/images/securitySettings.png";
import imageS2P1 from "../src/images/S2_P1.png";
import imageS2P2 from "../src/images/S2_P2.png";
import imageS2P3 from "../src/images/S2_P3.png";
import imageS2P4 from "../src/images/S2_P4.png";
import imageS2P5 from "../src/images/S2_P5.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Chris Márquez</Link>
              </li>
              <li>
                <Link to="/study1">UX Case Study 1</Link>
              </li>
              <li>
                <Link to="/study2">UX Case Study 2</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            {/* Admin settings Case Study */}
            <Route
              path="/study1"
              element={
                <SecuritySettingsStudy
                  coverImage={coverImageStudy1}
                  h1Title={caseSecuritySettings[0].title}
                  smallMetadata={caseSecuritySettings[0].metaData}
                  problemsObservedP1={
                    caseSecuritySettings[0].problemsObservedP1
                  }
                  problemsObservedP2={
                    caseSecuritySettings[0].problemsObservedP2
                  }
                  hypothesisP1={caseSecuritySettings[0].hypothesisP1}
                  hypothesisP2={caseSecuritySettings[0].hypothesisP2}
                  hypothesisP3={caseSecuritySettings[0].hypothesisP3}
                  stakeholderRequestP1={
                    caseSecuritySettings[0].stakeholderRequestP1
                  }
                  stakeholderRequestP2={
                    caseSecuritySettings[0].stakeholderRequestP2
                  }
                  stakeholderRequestP3={
                    caseSecuritySettings[0].stakeholderRequestP3
                  }
                  solveProblemP1={caseSecuritySettings[0].solveProblemP1}
                  solveProblemP2={caseSecuritySettings[0].solveProblemP2}
                  solveProblemP3={caseSecuritySettings[0].solveProblemP3}
                  solveProblemP4={caseSecuritySettings[0].solveProblemP4}
                  collaborationP1={caseSecuritySettings[0].collaborationP1}
                  collaborationP2={caseSecuritySettings[0].collaborationP2}
                  collaborationP3={caseSecuritySettings[0].collaborationP3}
                  collaborationP4={caseSecuritySettings[0].collaborationP4}
                  facilitationP1={caseSecuritySettings[0].facilitationP1}
                  facilitationP2={caseSecuritySettings[0].facilitationP2}
                  teamImpactP1={caseSecuritySettings[0].teamImpactP1}
                  headingS1P1={"Proposed Solution"}
                  videoS1P1={videoS1P1}
                  titleS1P1={videoSlides[0].title}
                  highlightS1P1={videoSlides[0].highlight}
                  p1S1P1={videoSlides[0].p1}
                  p2S1P1={videoSlides[0].p2}
                  videoS1P2={videoS1P2}
                  titleS1P2={videoSlides[1].title}
                  highlightS1P2={videoSlides[1].highlight}
                  p1S1P2={videoSlides[1].p1}
                  p2S1P2={videoSlides[1].p2}
                  videoS1P3={videoS1P3}
                  titleS1P3={videoSlides[2].title}
                  highlightS1P3={videoSlides[2].highlight}
                  p1S1P3={videoSlides[2].p1}
                  p2S1P3={videoSlides[2].p2}
                  videoS1P4={videoS1P4}
                  titleS1P4={videoSlides[3].title}
                  highlightS1P4={videoSlides[3].highlight}
                  p1S1P4={videoSlides[3].p1}
                  p2S1P4={videoSlides[3].p2}
                  solvedP1={caseSecuritySettings[0].solvedP1}
                  solvedP2={caseSecuritySettings[0].solvedP2}
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
                  impactP1={caseSecuritySettings[0].impactP1}
                  impactP2={caseSecuritySettings[0].impactP2}
                  impactP3={caseSecuritySettings[0].impactP3}
                  lessonsP1={caseSecuritySettings[0].lessonsP1}
                  lessonsP2={caseSecuritySettings[0].lessonsP2}
                  lessonsP3={caseSecuritySettings[0].lessonsP3}
                />
              }
            ></Route>
            <Route path="/study2" element={<MultiAccountMobileStudy />} />

            {/* Mobile Case Study */}
            <Route path="/" element={<Resume />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
