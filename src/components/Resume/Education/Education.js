import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h3 className="leftColumn">{this.props.h3_title}</h3>
        <div className="rightColumn">
          <h4>{this.props.h4_school_1}</h4>
          <p>
            {this.props.p_area_1} <br></br>
            {this.props.p_degree_1} <br></br>
            {this.props.p_date_1} <br></br>
            {this.props.p_place_1}
          </p>
          <h4>{this.props.h4_school_2}</h4>
          <p>
            {this.props.p_area_2} <br></br>
            {this.props.p_degree_2} <br></br>
            {this.props.p_date_2} <br></br>
            {this.props.p_place_2}
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
