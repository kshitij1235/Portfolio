import React, { useState, useEffect } from 'react';
import './App.css'; // Import your global styles
import TitleScreen from './components/TitleScreen';
import CustomButton from './components/Button';
import RadialGradient from './components/magicui/radial-gradient';

function App() {
  const [showPreviousContent, setShowPreviousContent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Determine scroll position
      const scrollPosition = window.scrollY;

      // Toggle content based on scroll position
      if (scrollPosition > 100) {
        setShowPreviousContent(false);
      } else {
        setShowPreviousContent(true);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className="App">
      {showPreviousContent ? (
        <div>
         <RadialGradient
          type="circle"
          from="rgba(120, 119, 198, 0.5)"
          to="hsla(0, 0%, 0%, 0)"
          size={300}
          origin="center"
          className="gradient"
        />
          <TitleScreen />
        </div>
      ) : (
        <div>
          {/* New content to show after scrolling */}
          <h2>New Content</h2>
          <p>This is the new content that appears after scrolling.</p>
        </div>
      )}
    </div>
  );
}

export default App;
