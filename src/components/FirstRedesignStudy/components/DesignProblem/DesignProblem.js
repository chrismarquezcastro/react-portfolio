import React, { Component } from "react";
import "../components.css";

class DesignProblem extends Component {
  render() {
    return (
      <div className="design-problem">
        <h3 className="leftColumn">Design Problem</h3>
        <div className="rightColumn">
          <h4>Problems observed</h4>
          <p>
            {this.props.problemsObservedP1}
            <img alt="Actions Menu Phone" src={this.props.V1ActionsPhone} />
            {this.props.problemsObservedP2}
            <img alt="Actions Menu Tablet" src={this.props.V1ActionsTablet} />
            {this.props.problemsObservedP3}
            <img alt="Dashboard Tablet" src={this.props.V1DashboardTablet} />
          </p>
          <h4>Hypothesis</h4>
          <p>
            {this.props.hypothesisP1}
            <br></br>
            <br></br>
            {this.props.hypothesisP2}
            <br></br>
            <br></br>
            {this.props.hypothesisP3}
          </p>
          <h4>What the stake-holders asked me to solve</h4>
          <p>
            {this.props.stakeholderRequestP1}
            <br></br>
            <br></br>
            {this.props.stakeholderRequestP2}
            <br></br>
            <br></br>
            {this.props.stakeholderRequestP3}
          </p>
          <h4>How I set up to solve the problem</h4>
          <p>
            {this.props.solveProblemP1}
            <br></br>
            <br></br>
            {this.props.solveProblemP2}
            <br></br>
            <br></br>
            {this.props.solveProblemP3}
            <br></br>
            <br></br>
            {this.props.solveProblemP4}
          </p>
        </div>
      </div>
    );
  }
}

export default DesignProblem;
