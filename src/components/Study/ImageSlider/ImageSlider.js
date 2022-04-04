import React, { Component } from "react";
import ImageSlide from "./ImageSlide/ImageSlide";

class ImageSlider extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ImageSlide
          image={this.props.imageS2P1}
          title={this.props.titleS2P1}
          highlight={this.props.highlightS2P1}
          p1={this.props.p1S2P1}
        />
        <ImageSlide
          image={this.props.imageS2P2}
          title={this.props.titleS2P2}
          highlight={this.props.highlightS2P2}
          p1={this.props.p1S2P2}
        />
        <ImageSlide
          image={this.props.imageS2P3}
          title={this.props.titleS2P3}
          highlight={this.props.highlightS2P3}
          p1={this.props.p1S2P3}
        />
        <ImageSlide
          image={this.props.imageS2P4}
          title={this.props.titleS2P4}
          highlight={this.props.highlightS2P4}
          p1={this.props.p1S2P4}
        />
        <ImageSlide
          image={this.props.imageS2P5}
          title={this.props.titleS2P5}
          highlight={this.props.highlightS2P5}
          p1={this.props.p1S2P5}
        />
      </div>
    );
  }
}

export default ImageSlider;
