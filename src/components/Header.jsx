///////////////////////////////////////////////////////
///// COMPONENT MODULES ///////////////////////////////
///////////////////////////////////////////////////////

// Import Styles
import styles from "@/styles/header.module.css"

// Import MUI Components
import Typography from "@mui/material/Typography";

///////////////////////////////////////////////////////
///// COMPONENT DESCRIPTION ///////////////////////////
///////////////////////////////////////////////////////

// The Header.jsx component is used to headline important sections of the web application.
// This component allows users to quickly see how our pages and components are organized.
// ----------------------------------------------------
// The only properties this component requires to function is a simple "title" to display.
// ----------------------------------------------------
// Used in:
// pages/home.js

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

export default function Header({title}) {
    
    return (
        <>
            <Typography id={styles.header}>{title}</Typography>
        </>
    );
    
};