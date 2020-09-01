import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Page from "../Page";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faLink } from "@fortawesome/free-solid-svg-icons";

library.add({ faEye, faLink });

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
