import React, { Component } from "react";
import Styles from "./About.module.css";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="about-wrapper">
          <div className="about-text">
            <div className={Styles.AboutContainer}>
              <h3>About Me </h3>
            </div>
            <div className={this.props.className}>
              <h3>Title</h3>
              <p>This is a text that will appear.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
