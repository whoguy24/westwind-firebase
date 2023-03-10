///////////////////////////////////////////////////////
///// PAGE MODULES ////////////////////////////////////
///////////////////////////////////////////////////////

// Import Styles
import "@/styles/globals.css"

// Import Components
import Navigation from "@/components/Navigation";

///////////////////////////////////////////////////////
///// PAGE DESCRIPTION ////////////////////////////////
///////////////////////////////////////////////////////

// The _app.js page is the overall wrapper component of the entire web application.
// It is used to render all other pages and components.
// ----------------------------------------------------
// Components meant to be rendered throughout the entire application should be implemented here.
// "Navigation" - top navigation bar.

///////////////////////////////////////////////////////
///// PAGE FUNCTION ///////////////////////////////////
///////////////////////////////////////////////////////

export default function App({ Component, pageProps }) {
  return (
    <>  
        <Navigation />
        <div id="app">
          <Component {...pageProps} />
        </div>
    </>
  );
};