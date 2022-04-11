import React, { Component } from "react";
import VideoSlide from "./VideoSlide/VideoSlide";

class VideoSlider extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <VideoSlide
          video={this.props.videoP1}
          title={this.props.titleP1}
          highlight={this.props.highlightS1P1}
          p1={this.props.p1P1}
          p2={this.props.p2P1}
        />
        <VideoSlide
          video={this.props.videoP2}
          title={this.props.titleP2}
          highlight={this.props.highlightP2}
          p1={this.props.p1P2}
          p2={this.props.p2P2}
        />
        <VideoSlide
          video={this.props.videoP3}
          title={this.props.titleP3}
          highlight={this.props.highlightP3}
          p1={this.props.p1P3}
          p2={this.props.p2P3}
        />
        <VideoSlide
          video={this.props.videoP4}
          title={this.props.titleP4}
          highlight={this.props.highlightP4}
          p1={this.props.p1P4}
          p2={this.props.p2P4}
        />
      </div>
    );
  }
}

export default VideoSlider;
