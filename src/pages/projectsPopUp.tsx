import React, { useState } from "react";
import './project_PopUp.css';
import Popupcontent from "./Popupcontent";
import ProjectsList from "../projectList";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectPopupProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
}

function ProjectPopup({ trigger, setTrigger }: ProjectPopupProps) {
  const [project, setProject] = useState<Project | null>(null);

  return trigger ? (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-content">
          <div className="sidebar">
            <h1 style={{fontFamily: "monospace", paddingLeft: "31%"}}>projects</h1>
            <div style={{ padding: "10px" }}></div>
            <ul>
              {ProjectsList.projects.map((proj, index) => (
                <li key={index}>
                  <button
                    className="ProjectButton"
                    onClick={() => setProject(proj)}
                    style={{
                      width: "100%",
                      padding: "20px",
                      border: "none",
                      borderBottom: "1px solid #ccc", 
                      background: "#fff",
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.target.style.background = "#f0f0f0"; }}
                    onMouseLeave={(e) => { e.target.style.background = "#fff"; }}
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
