import React, { Component } from "react";
import VideoSlide from "./VideoSlide/VideoSlide";

class VideoSlider extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <VideoSlide
          video={this.props.videoS1P1}
          title={this.props.titleS1P1}
          highlight={this.props.highlightS1P1}
          p1={this.props.p1S1P1}
          p2={this.props.p2S1P1}
        />
        <VideoSlide
          video={this.props.videoS1P2}
          title={this.props.titleS1P2}
          highlight={this.props.highlightS1P2}
          p1={this.props.p1S1P2}
          p2={this.props.p2S1P2}
        />
        <VideoSlide
          video={this.props.videoS1P3}
          title={this.props.titleS1P3}
          highlight={this.props.highlightS1P3}
          p1={this.props.p1S1P3}
          p2={this.props.p2S1P3}
        />
        <VideoSlide
          video={this.props.videoS1P4}
          title={this.props.titleS1P4}
          highlight={this.props.highlightS1P4}
          p1={this.props.p1S1P4}
          p2={this.props.p2S1P4}
        />
      </div>
    );
  }
}

export default VideoSlider;
