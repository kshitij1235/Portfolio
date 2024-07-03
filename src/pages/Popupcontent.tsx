import React from "react";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

interface PopupContentProps {
  project: Project | null;
}

function Popupcontent({ project }: PopupContentProps) {
  return (
    <>
      {project ? (
        <>
<div className="image-placeholder" style={{ textAlign: 'center', margin: '20px', height: "400px", width: "1000px" }}>
  <img src={project.image} alt={project.name} className="project-image" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
</div>

          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}>Learn more</a>
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>{project.description}</p>
        </>
      ) : (
        <p>Select a project to see the details</p>
      )}
    </>
  );
}

export default Popupcontent;
