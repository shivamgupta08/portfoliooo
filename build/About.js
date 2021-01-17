import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      //   var name = this.props.data.name;
      //   var profilepic = "images/" + this.props.data.image;
      //   var bio = this.props.data.bio;
      //   var street = this.props.data.address.street;
      //   var city = this.props.data.address.city;
      //   var state = this.props.data.address.state;
      //   var zip = this.props.data.address.zip;
      //   var phone = this.props.data.phone;
      //   var email = this.props.data.email;
      //   var resumeDownload = this.props.data.resumedownload;
      console.log(this.props.data.aboutData[0]);
      console.log(this.props.data.aboutData[1]);
      console.log(this.props.data.aboutData[2]);
    }

    return (
      <section id="about">
        {/* <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div> */}

        <h1 className="aboutMeHeading">About Me</h1>
        <div className="line-mf"></div>

        <p>{this.props.data.aboutData[0]}</p>
        <p>{this.props.data.aboutData[0]}</p>
        <p>
          A geeky enthusiast with a passion of bringing change to the lives of
          people by harnessing the power of technology and engineering, I love
          to spend my time on trying new tools, algorithms and brushing up my
          logic to solve challenging problems and converting them into products
          that can be used by people. I also play with data structures over ball
          sometimes.
        </p>
        <p>
          When not behind the screen, you can find me behind the lens, as I love
          to capture the world through my photography. I take an interest in
          modern literature, philosophy and cinema too and would love to have a
          discussion about them over a cup of coffee/tea.
        </p>
      </section>
    );
  }
}

export default About;
