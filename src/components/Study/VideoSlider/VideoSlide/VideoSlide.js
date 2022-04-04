import React, { Component } from "react";
import "./Slide.css";

class VideoSlide extends Component {
  render() {
    return (
      <div className="slide">
        <div className="leftColumn">
          <h2>{this.props.title}</h2>
          <h4>{this.props.highlight}</h4>
          <p>
            {this.props.p1}
            <br></br>
            <br></br>
            {this.props.p2}
          </p>
        </div>
        <div className="rightColumn">
          <video max-width="680" height="auto" controls>
            <source src={this.props.video} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default VideoSlide;
