import React, { Component } from "react";
import "../Study.css";

class MyRole extends Component {
  render() {
    return (
      <div className="myRole">
        <h3 className="leftColumn">My Role</h3>
        <div className="rightColumn">
          <h4>Collaboration across teams</h4>
          <p>
            {this.props.collaborationP1}
            <br></br>
            <br></br>
            {this.props.collaborationP2}
            <br></br>
            <br></br>
            {this.props.collaborationP3}
            <br></br>
            <br></br>
            {this.props.collaborationP4}
          </p>
          <h4>Facilitation</h4>
          <p>
            {this.props.facilitationP1}
            <br></br>
            <br></br>
            {this.props.facilitationP2}
          </p>
          <h4>Impact to the team</h4>
          <p>{this.props.teamImpactP1}</p>
        </div>
      </div>
    );
  }
}

export default MyRole;
