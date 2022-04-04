import React from "react";

const Impact = (props) => {
  return (
    <div className=" basicLeftRight">
      <div className="leftColumn">
        <h3>Impact</h3>
      </div>
      <div className="rightColumn">
        <h4>Customer and Users</h4>
        <p>{props.impactP1}</p>
        <h4>Kiteworks organization</h4>
        <p>{props.impactP2}</p>
      </div>
    </div>
  );
};

export default Impact;
