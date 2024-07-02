import React, { useState } from "react";
import './project_PopUp.css';
import Popupcontent from "./Popupcontent";
import ProjectsList from "../projectList";

function ProjectPopup(props) {
  const { trigger, setTrigger } = props;

  const [project, setProject] = useState("boxdb");

  return trigger ? (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-content">
          <div className="sidebar">
            <h1 className="projects-title">projects</h1>
            <div style={{ padding: "10px" }}></div>
            <ul>
              {ProjectsList.projects.map((proj, index) => (
                <li key={index}>
                  <button 
                    className="ProjectButton"
                    onClick={() => setProject(proj)}
                  >
                    {proj.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="close-button" onClick={() => setTrigger(false)}>X</button>
          <div className="main-content">
            <Popupcontent project={project} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectPopup;
