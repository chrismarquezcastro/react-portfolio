import React from "react";
import ImageSlide from "./ImageSlide/ImageSlide";

const ProposedSolution = (props) => {
  return (
    <div>
      <h3>Proposed Solution</h3>
      <ImageSlide
        image={props.V2HomeTablet}
        title={props.s1Title}
        highlight={props.s1Highlight}
        p1={props.s1P1}
      />
      <ImageSlide
        image={props.V2ActionsPhone}
        title={props.s2Title}
        highlight={props.s2Highlight}
        p1={props.s2P1}
      />
      <ImageSlide
        image={props.V2MailTablet}
        title={props.s3Title}
        highlight={props.s3Highlight}
        p1={props.s3P1}
      />
      <ImageSlide
        image={props.V2ViewerCamera}
        title={props.s4Title}
        highlight={props.s4Highlight}
        p1={props.s4P1}
      />
      <ImageSlide
        image={props.V2HomeFiles}
        title={props.s5Title}
        highlight={props.s5Highlight}
        p1={props.s5P1}
      />
    </div>
  );
};

export default ProposedSolution;
