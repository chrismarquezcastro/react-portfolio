import React from "react";

const ProblemSolved = (props) => {
  return (
    <div className="basicLeftRight">
      <div className="leftColumn">
        <h3>How the solution solved the problem</h3>
      </div>
      <div className="rightColumn">
        <h4>What can the users do now, VS before</h4>
        <p>{props.solvedP1}</p>
        <h4>Life improvements</h4>
        <p>{props.solvedP2}</p>
      </div>
    </div>
  );
};

export default ProblemSolved;
