import React from "react";

const Lessons = (props) => {
  return (
    <div className=" basicLeftRight">
      <div className="leftColumn">
        <h3>Lessons Learned</h3>
      </div>
      <div className="rightColumn">
        <h4>Personally</h4>
        <p>{props.lessonsP1}</p>
        <h4>As a team</h4>
        <p>{props.lessonsP2}</p>
        <br></br>
        <br></br>
        <p>{props.lessonsP3}</p>
      </div>
    </div>
  );
};

export default Lessons;
