import React, { Component } from "react";
import jsIcon from "../assets/js.svg";
import cppIcon from "../assets/cpp.png";
import cIcon from "../assets/c.svg";
import bsIcon from "../assets/bootstrap.png";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.png";
import mongoIcon from "../assets/mongo.png";
import expressIcon from "../assets/expressjs.png";
import reactIcon from "../assets/react.svg";
import gitIcon from "../assets/git.png";
import nodeIcon from "../assets/nodejs.png";
import npmIcon from "../assets/npm.png";
import reduxIcon from "../assets/redux.png";
import vueIcon from "../assets/vue.png";
import vuetifyIcon from "../assets/vuetify.png";
import pandasIcon from "../assets/pandas.png";
import pythonIcon from "../assets/python.svg";
import numpyIcon from "../assets/numpy.png";
import herokuIcon from "../assets/heroku.png";

import { Icon, InlineIcon } from "@iconify/react";
import codeWorking from "@iconify-icons/ion/code-working";
import statsChart from "@iconify-icons/ion/stats-chart";
// import cameraIcon from "@iconify-icons/ion/camera";
import { css } from "jquery";

class Skills extends Component {
  getSkillsData = () => {
    if (this.props.data) {
      var iconList = [codeWorking, statsChart];
      var skillsCompo = this.props.data.skillsData.map((obj, idx) => (
        <div key={idx} className="skills-column">
          <Icon className="skills-icon" icon={iconList[idx]} />
          <h2>{obj.title}</h2>
          <p>{obj.desc}</p>
        </div>
      ));
      return skillsCompo;
    } else return null;
  };
  render() {
    return (
      <section id="skills">
        <h1>Skills</h1>
        <div className="line-mf"></div>
        <div className="skills-columns">{this.getSkillsData()}</div>
        <h2>Technologies</h2>
        <div className="row skill">
          <img className="imageIcon" src={jsIcon} />
          <img className="imageIcon" src={cppIcon} />
          <img className="imageIcon" src={cIcon} />
          <img className="imageIcon" src={htmlIcon} />
          <img className="imageIcon" src={cssIcon} />
          <img className="imageIcon" src={bsIcon} />
          <img className="imageIcon" src={expressIcon} />
          <img className="imageIcon" src={mongoIcon} />
          <img className="imageIcon" src={reactIcon} />
          <img className="imageIcon" src={gitIcon} />
          <img className="imageIcon" src={herokuIcon} />
          <img className="imageIcon" src={nodeIcon} />
          <img className="imageIcon" src={npmIcon} />
          <img className="imageIcon" src={reduxIcon} />
          <img className="imageIcon" src={vueIcon} />
          <img className="imageIcon" src={vuetifyIcon} />
          <img className="imageIcon" src={pandasIcon} />
          <img className="imageIcon" src={numpyIcon} />
          <img className="imageIcon" src={pythonIcon} />
        </div>
      </section>
    );
  }
}
export default Skills;
