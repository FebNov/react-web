import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Page from "../Page";
import "./App.css";

import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {["fab", "apple"]} from "@fortawesome/free-solid-svg-icons";

library.add{["fab", "apple"]}

function App() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__page">
        <Page />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
