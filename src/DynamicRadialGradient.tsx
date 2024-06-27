import React from 'react';

interface DynamicRadialGradientProps {
  innerColor: string;
  outerColor: string;
}

const DynamicRadialGradient: React.FC<DynamicRadialGradientProps> = ({ innerColor, outerColor }) => {
  const gradientStyle: React.CSSProperties = {
    background: `radial-gradient(circle, ${innerColor}, ${outerColor})`,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return <div style={gradientStyle}></div>;
};

export default DynamicRadialGradient;
