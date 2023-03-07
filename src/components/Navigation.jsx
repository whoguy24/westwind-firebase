///////////////////////////////////////////////////////
///// COMPONENT MODULES ///////////////////////////////
///////////////////////////////////////////////////////

// Import React Libraries
import { useState } from 'react';

// Import Application Libraries
import useWindowMode from "@/hooks/useWindowMode.js"

// Import MUI Components
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Import Dependent Components

///////////////////////////////////////////////////////
///// COMPONENT DESCRIPTION ///////////////////////////
///////////////////////////////////////////////////////

// The Navigation component renders the navigation bar on the top of the website.
// ----------------------------------------------------
// It is used to navigate to multiple pages in the web application. There are two primary modes: 
// Large: used for larger screens, like desktops and larger tablets.
// Small: used for smaller screens, like mobile devices and smaller tablets.
// ----------------------------------------------------
// Mode will be determined based on viewport size, available to the component via the useContext() hook.
// Navigation bar is intended to be globally available across the web application at all times.
// ----------------------------------------------------
// Used in:
// pages/_app.js

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

export default function Navigation() {

    const windowMode = useWindowMode()
    
    return (
        <>
            { windowMode === "DESKTOP" && <p>DESKTOP</p> }
            { windowMode === "MOBILE" && <p>MOBILE</p> }
        </>
    );
    
};