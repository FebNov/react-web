import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Action from "./Action";


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
        <Action>
          <About className={this.state.className}></About>
        </Action>
      </div>
    );
  }
}
export default Page;
