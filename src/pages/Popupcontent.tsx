import React from "react";
import './Popupcontent.css';

function Popupcontent({ project }) {
  return (
    <>
      {project ? (
        <>
          <div className="image-placeholder">
            <img src={project.image} alt={project.name} className="project-image" />
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="learn-more-link">
            Learn more
          </a>
          <p className="project-description">{project.description}</p>
        </>
      ) : (
        <p>Select a project to see the details</p>
      )}
    </>
  );
}

export default Popupcontent;
