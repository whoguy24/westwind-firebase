///////////////////////////////////////////////////////
///// PAGE MODULES ////////////////////////////////////
///////////////////////////////////////////////////////

// Import Styles
import "@/styles/globals.css"

// Import Components
import Navigation from "@/components/Navigation";

import { Provider } from 'react-redux';
import store from '@/redux/store.js';

///////////////////////////////////////////////////////
///// PAGE DESCRIPTION ////////////////////////////////
///////////////////////////////////////////////////////

// The _app.js page is the overall wrapper component of the entire web application.
// It is used to render all other pages and components.
// ----------------------------------------------------
// Components meant to be rendered throughout the entire application should be implemented here.
// "Navigation" - top navigation bar.
// "Provider" - Redux-Sagas persistant data store.

///////////////////////////////////////////////////////
///// PAGE FUNCTION ///////////////////////////////////
///////////////////////////////////////////////////////

export default function App({ Component, pageProps }) {
  return (
    <>  
        <Provider store={store}>
          <Navigation />
          <div id="app">
            <Component {...pageProps} />
          </div>
        </Provider>
    </>
  );
};