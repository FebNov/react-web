import React, { Component } from "react";
import About from "./About";
import Home from "./Home";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      className: "hidden",
    };
  }
  handleScroll() {
    if (document.documentElement.scrollTop > 230) {
      this.setState({
        className: "show",
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }
  render() {
    return (
      <div>
        <Home />
        <About className={this.state.className} />
      </div>
    );
  }
}
export default Page;
