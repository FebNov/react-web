import React from "react";
import "./Project.css";
import ProjectItem from "./Components";
import ReactWeb from "./assets/react-web.PNG";

const Project = () => (
  <div className="container">
    <h4 className="projectHeading">Recently Project</h4>
    <div className="group">
      <div className="item">
        <ProjectItem
          imgsrc={ReactWeb}
          alt="react-web"
          title="Personal Web"
          category="React"
          src="www.google.com"
        />
      </div>
      <div className="item">
        <ProjectItem
          imgsrc={ReactWeb}
          alt="react-web"
          title="Personal Web"
          category="React"
          src="www.google.com"
        />
      </div>
      <div className="item ">
        <ProjectItem
          imgsrc={ReactWeb}
          alt="react-web"
          title="Personal Web"
          category="React"
          src="www.google.com"
        />
      </div>
      <div className="item">
        <ProjectItem
          imgsrc={ReactWeb}
          alt="react-web"
          title="Personal Web"
          category="React"
          src="www.google.com"
        />
      </div>
      <div className="item">
        <ProjectItem
          imgsrc={ReactWeb}
          alt="react-web"
          title="Personal Web"
          category="React"
          src="www.google.com"
        />
      </div>
      <div className="item">
        <ProjectItem
          imgsrc={ReactWeb}
          alt="react-web"
          title="Personal Web"
          category="React"
          src="www.google.com"
        />
      </div>
    </div>
  </div>
);

export default Project;
