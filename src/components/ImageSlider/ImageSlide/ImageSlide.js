import React, { Component } from "react";
import "./Slide.css";

class ImageSlide extends Component {
  render() {
    return (
      <div className="basicLeftRight slide">
        <div className="leftColumn">
          <h2>{this.props.title}</h2>
          <h4>{this.props.highlight}</h4>
          <p>{this.props.p1}</p>
        </div>
        <div className="rightColumn">
          <img
            alt="slide"
            src={this.props.image}
            max-width="680"
            height="auto"
          ></img>
        </div>
      </div>
    );
  }
}

export default ImageSlide;
