import React, { Component } from "react";
import ImageSlide from "./ImageSlide/ImageSlide";

class ImageSlider extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <ImageSlide
          image={this.props.imageP1}
          title={this.props.titleP1}
          highlight={this.props.highlightP1}
          p1={this.props.p1P1}
        />
        <ImageSlide
          image={this.props.imageP2}
          title={this.props.titleP2}
          highlight={this.props.highlightP2}
          p1={this.props.p1P2}
        />
        <ImageSlide
          image={this.props.imageP3}
          title={this.props.titleP3}
          highlight={this.props.highlightP3}
          p1={this.props.p1P3}
        />
        <ImageSlide
          image={this.props.imageP4}
          title={this.props.titleP4}
          highlight={this.props.highlightP4}
          p1={this.props.p1P4}
        />
        <ImageSlide
          image={this.props.imageP5}
          title={this.props.titleP5}
          highlight={this.props.highlightP5}
          p1={this.props.p1P5}
        />
      </div>
    );
  }
}

export default ImageSlider;
