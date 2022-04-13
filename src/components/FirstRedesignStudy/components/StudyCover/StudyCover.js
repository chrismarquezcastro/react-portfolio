import React, { Component } from "react";
import "../components.css";

class StudyCover extends Component {
  render() {
    return (
      <div className="study-title">
        <img className="coverImg2" alt="cover" src={this.props.coverImage} />
        <h1>{this.props.h1Title}</h1>
        <small>{this.props.smallMetadata}</small>
      </div>
    );
  }
}

export default StudyCover;
