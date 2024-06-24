import React, { Fragment } from 'react';
import './App.css';
import Particles from './components/magicui/Particles';
import TitleScreen from './components/TitleScreen';
import CustomButton from './components/Button';

function App() {
  return (
    <Fragment>
      {/* Particles background covering the entire viewport */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}>
        <Particles color="purple" ease={50} quantity={100} staticity={1000} size={1} />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        
        {/* Title screen component */}
        <TitleScreen />

        {/* Button component */}
        <div style={{alignContent:"cen" }}>
          <CustomButton word="Click Here" />
        </div>

      </div>
    </Fragment>
  );
}

export default App;
