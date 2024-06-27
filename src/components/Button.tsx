import { Fragment, useState, useEffect } from "react";

function CustomButton() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <Fragment>
            <div 
                style={{
                    position: "fixed",
                    bottom: "20px",  // Adjust this value to change the distance from the bottom
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: "1000",  // Ensure it's above other content if necessary
                }}
            >
                <button 
                    style={{ 
                        background: scrolled ? "white" : "black",  // Change background color when scrolled
                        color: scrolled ? "black" : "white",      // Change text color when scrolled
                        border: scrolled ? "2px solid black" : "none", // Add border when scrolled
                        padding: "10px", 
                        minWidth: "100px", 
                        maxWidth: "400px", 
                        borderRadius: "50px",
                        boxShadow: scrolled ? "0px 0px 10px rgba(0, 0, 0, 0.5)" : "none", // Box shadow when scrolled
                    }}
                >
                    <h1 
                        style={{ 
                            textAlign: "center", 
                            fontFamily: "monospace", 
                            fontWeight: "lighter",
                            margin: "0",  // Remove default margin for h1
                        }}
                    >
                        {scrolled ? "You've scrolled!" : "Scroll to see my work"}
                    </h1>
                </button>
            </div>
        </Fragment>
    );
}

export default CustomButton;
