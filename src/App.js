import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "https://api.jsonbin.io/b/6001499e4f42973a289d250c/3",
      dataType: "json",
      cache: false,
      headers: {
        "secret-key":
          "$2b$10$IsoiIuiZvqNdRgisDoLt..6llpIJIKbvWWwq9X240CBLV8gGzluTm",
      },
      success: function (data) {
        console.log(data);
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentWillMount() {
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.about} />
        <Skills data={this.state.resumeData.skills} />
        <Projects data={this.state.resumeData.portfolio} />
        <Experience data={this.state.resumeData.experience} />
        <Footer />
      </div>
    );
  }
}

export default App;
