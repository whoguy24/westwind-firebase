///////////////////////////////////////////////////////
///// LIBRARY MODULES /////////////////////////////////
///////////////////////////////////////////////////////

// Import Required Modules
import { createTheme }  from '@material-ui/core/styles'

///////////////////////////////////////////////////////
///// LIBRARY DESCRIPTION /////////////////////////////
///////////////////////////////////////////////////////

// HIGH LEVEL DESCRIPTION: (Brief summary of the library.)
// The library.js library is used for development purposes.
// 
// ----------------------------------------------------
// MODE OF OPERATION: (Why this library exists, and what problem it solves.)
// This library will provide a starting point towards the construction of a new library.
// This will allow a developer to maintain standardized documentention to aid future development.
//
//
// ----------------------------------------------------
// COMPONENT CONTEXT: (What modules this library requires to function, as well as any dependent libraries.)
// This library is not dependent on, or provides data to any other library.
//
//
// ----------------------------------------------------
// LOCATIONS: (List pages/components this component will be used in.)
// Used in:
// pages/etc.
// components/etc.

///////////////////////////////////////////////////////
///// LIBRARY CODE ////////////////////////////////////
///////////////////////////////////////////////////////

// Define Variables
const theme = createTheme({
  // palette: {
  //   primary: { 
  //     main: "rgba(100, 30, 20)",
  //     light: "rgba(110, 40, 30)", 
  //     dark: "rgba(90, 20, 10)",
  //     contrastText: "rgba(255, 235, 166)"
  //   },
  // },
  // shape: {
  //   borderRadius: 0
  // },
  // typography: {
  //   button: {
  //     textTransform: "capitalize"
  //   }
  // },
  // components: {
  //   MuiToolbar: {
  //     styleOverrides: {
  //       root: {
  //         main: "223, 71, 37, 0.2"
  //       }
  //     }
  //   }
  // }
})

// Export Library
export default theme;