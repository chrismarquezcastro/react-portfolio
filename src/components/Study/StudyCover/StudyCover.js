import React, { Component } from "react";
import "../Study.css";
import cover from "./securitySettings.png";

class StudyCover extends Component {
  render() {
    return (
      <div className="study-title">
        <img className="coverImg" alt="cover" src={cover} />
        <h1>{this.props.h1Title}</h1>
        <small>{this.props.smallMetadata}</small>
      </div>
    );
  }
}

export default StudyCover;
