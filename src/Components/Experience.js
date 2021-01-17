import React, { Component } from "react";

class Experience extends Component {
  getExperienceData = () => {
    if (this.props.data) {
      var experienceCompo = this.props.data.experienceData.map((obj, idx) => (
        <li key={idx}>
          <div className="timeline-content">
            <h3 className="date">{obj.date}</h3>
            <h1 className="timeline-content-h1">{obj.title}</h1>
            {obj.workDone.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </li>
      ));
      return experienceCompo;
    } else return null;
  };

  render() {
    return (
      <section id="experience">
        <h1 className="sub-heading">Work Experience</h1>
        <div className="line-mf"></div>
        <div className="container">
          <div className="timeline">
            <ul>{this.getExperienceData()}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
