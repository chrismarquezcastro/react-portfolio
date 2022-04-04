import React, { Component } from "react";
import Job from "./Job/Job";
import Education from "./Education/Education";
import { education, jobs } from "./content";
import logo from "./header.png";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="cover">
          <img className="logo" alt="logo" src={logo} />
          <h4 className="highlight">
            My goal is to solve critical problems, by making intuitive and high
            quality products.
          </h4>
        </div>
        <hr className="rounded"></hr>

        {/* KITEWORKS */}
        <Job
          id={jobs[0].id}
          heading3={jobs[0].company}
          smallDate={jobs[0].date}
          smallPlace={jobs[0].place}
          heading4={jobs[0].role}
          paragraph={jobs[0].description}
        />

        <hr className="rounded"></hr>

        {/* SWIPP */}
        <Job
          id={jobs[1].id}
          heading3={jobs[1].company}
          smallDate={jobs[1].date}
          smallPlace={jobs[1].place}
          heading4={jobs[1].role}
          paragraph={jobs[1].description}
        />

        <hr className="rounded"></hr>

        {/* TALENTHOUSE */}
        <Job
          id={jobs[2].id}
          heading3={jobs[2].company}
          smallDate={jobs[2].date}
          smallPlace={jobs[2].place}
          heading4={jobs[2].role}
          paragraph={jobs[2].description}
        />

        <hr className="rounded"></hr>

        {/* AGENCY */}
        <Job
          id={jobs[3].id}
          heading3={jobs[3].company}
          smallDate={jobs[3].date}
          smallPlace={jobs[3].place}
          heading4={jobs[3].role}
          paragraph={jobs[3].description}
        />

        <hr className="rounded"></hr>

        {/* EDUCATION */}
        <Education
          id={education[0].id}
          h3_title={education[0].title}
          h4_school_1={education[0].school}
          p_area_1={education[0].area}
          p_degree_1={education[0].degree}
          p_date_1={education[0].date}
          p_place_1={education[0].place}
          h4_school_2={education[1].school}
          p_area_2={education[1].area}
          p_degree_2={education[1].degree}
          p_date_2={education[1].date}
          p_place_2={education[1].place}
        />
      </div>
    );
  }
}

export default Resume;
