import React, { Component } from "react";
import "./Job.css";

class Job extends Component {
  render() {
    return (
      <div className="job">
        <div className="leftColumn">
          <h3>{this.props.heading3}</h3>
          <small>
            {this.props.smallDate}
            <br></br>
            {this.props.smallPlace}
          </small>
        </div>
        <div className="rightColumn">
          <h4>{this.props.heading4}</h4>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}

export default Job;
