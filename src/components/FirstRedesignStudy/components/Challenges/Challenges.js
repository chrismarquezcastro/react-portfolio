import React from "react";
import ImageSlide from "./ImageSlide/ImageSlide";

const Challenges = (props) => {
  return (
    <div>
      <h3>Challenges</h3>
      <ImageSlide
        image={props.s1Challenge}
        title={props.s1Title}
        highlight={props.s1Highlight}
        p1={props.s1P1}
      />
      <ImageSlide
        image={props.s2Challenge}
        title={props.s2Title}
        highlight={props.s2Highlight}
        p1={props.s2P1}
      />
      <ImageSlide
        image={props.s3Challenge}
        title={props.s3Title}
        highlight={props.s3Highlight}
        p1={props.s3P1}
      />
    </div>
  );
};

export default Challenges;
