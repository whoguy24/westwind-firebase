///////////////////////////////////////////////////////
///// HOOK MODULES ////////////////////////////////////
///////////////////////////////////////////////////////

// Import Required Modules
import { useState, useEffect } from 'react';

///////////////////////////////////////////////////////
///// HOOK DESCRIPTION ////////////////////////////////
///////////////////////////////////////////////////////

// The useWindowMode.js hook is used to calculate the window mode for components.
// ----------------------------------------------------
// The hook will return a window mode, based on the "breakpoint" variable:
// "DESKTOP" - Indicates that larger, desktop-like behavior is desired.
// "MOBILE" - Indicates that smaller, mobile-like behavior is desired.
// ----------------------------------------------------
// This will allow components to react to changes in viewport width.
// Uses a window event listener, which runs the "handleResize" function when the viewport changes.
// The "handleResize" function in turn sets the "windowMode" state based on the "breakpoint" variable.
// Window event listener is removed once window is done resizing.
// ----------------------------------------------------
// Used in:
// components/Navigation.jsx

///////////////////////////////////////////////////////
///// HOOK CODE ///////////////////////////////////////
///////////////////////////////////////////////////////

// // Define Hook Function
export default function useWindowMode() {

  // Width (in pixels) the window will switch modes
  const breakpoint = 800;

  // React state which will manage window mode
  const [windowMode, setMode] = useState("");

  // Run useEffect hook when the component is mounted
  useEffect(() => {
    function handleResize() {
      if( window.innerWidth > breakpoint ) {
        setMode("DESKTOP")
      }
      else{
        setMode("MOBILE")
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowMode;

}