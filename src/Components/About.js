import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var aboutData = this.props.data.aboutData.map((para, idx) => (
        <p key={idx}>{para}</p>
      ));
    }
    return (
      <section id="about">
        <h1 className="aboutMeHeading">About Me</h1>
        <div className="line-mf"></div>
        <div>{aboutData}</div>
      </section>
    );
  }
}

export default About;
