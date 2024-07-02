import React, { Fragment, useState } from "react";
import BlurIn from "../components/magicui/Blur-in";
import RadialGradient from "../components/magicui/radial-gradient";
import Particles from "../components/magicui/Particles";
import NumberTicker from "../components/magicui/number-ticker";
import ProjectPopup from "./projectsPopUp";
import ProjectsList from "../projectList";

function TitleScreen() {
  const divStyle: React.CSSProperties = {
    position: "absolute",
    display: 'flex',
    top: 0,
    left: 0,
    padding: "20px",
  };

  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <Fragment>
      <div style={divStyle}>
        <h1 style={{ fontFamily: "monospace", textAlign: "center" }}>
          <a onClick={togglePopup}>My projects</a> (<NumberTicker value={ProjectsList.projects.length}></NumberTicker>)
        </h1>
      </div>
      <Particles color="black" quantity={200}></Particles>
      <Particles color="black" size={0.3}></Particles>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px", // Add padding for mobile layout
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontWeight: "normal",
            fontSize: "20px",
            marginBottom: "5px",
            textAlign: "center",
          }}
        >
          <BlurIn word="HI , I AM KSHITIJ JATHAR" duration={1}></BlurIn>
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "normal",
            fontSize: "14px",
          }}
        >
          <BlurIn
            word="AM 22 , AND I LIKE TO CODE !!"
            duration={2}
          ></BlurIn>
        </div>
      </div>
      {popup && <ProjectPopup trigger={popup} setTrigger={setPopup} />}
    </Fragment>
  );
}

export default TitleScreen;
