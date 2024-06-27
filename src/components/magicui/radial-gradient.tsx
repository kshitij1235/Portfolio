import React, { CSSProperties, useEffect, useState } from "react";

type Type = "circle" | "ellipse";

type Origin =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

interface RadialProps {
  type?: Type;
  from?: string;
  to?: string;
  size?: number;
  origin?: Origin;
  className?: string;
}

const RadialGradient = ({
  type = "circle",
  from = "#E0E0E0", // Light gray
  to = "#FFFFFF",   // White
  size = 300,
  origin = "center",
  className,
}: RadialProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Triggering fade-in after component mounts
    setFadeIn(true);
  }, []);

  const styles: CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    backgroundImage: `radial-gradient(${type} ${size}px at ${origin}, ${from}, ${to})`,
    opacity: fadeIn ? 0.5 : 0,  // Initial opacity set to 0 to start with fade-in effect
    borderRadius: type === "circle" ? "100%" : "100px",  // Border radius based on type
    filter: "blur(3px) contrast(95%)",  // Blur and contrast adjustments
    zIndex: -1,        // Ensure the gradient is behind other content
    transform: "scale(2) translate(-1%, -1%)", // Scale and translate for positioning
    transition: "opacity 2s ease",  // CSS transition for opacity
  };

  return <div className={className} style={styles} />;
};

export default RadialGradient;
