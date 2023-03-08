///////////////////////////////////////////////////////
///// COMPONENT MODULES ///////////////////////////////
///////////////////////////////////////////////////////

// Import React Libraries
import { useState } from 'react';

// Import Application Libraries
import useWindowMode from "@/hooks/useWindowMode.js"

import styles from '@/styles/navigation.module.css'

// Import MUI Components
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

            <AppBar id={ styles.navigation_bar } position="static">

                {/* <Toolbar > */}

                    <div id={ styles.navigation_container_left } >

                        <Button id={ styles.navigation_button_home } disableRipple >Westwind Morgans</Button>

                    </div>

                    <div id={ styles.navigation_container_right } >

                        <Button id={ styles.navigation_button_menu } >Horses</Button>
                        <Button id={ styles.navigation_button_menu } >Contact</Button>
                        <Button id={ styles.navigation_button_menu } >FB</Button>
                        
                        {/* <Button 
                            className="navigation-button-toolbar"
                            aria-controls={ horsesMenuActive ? 'horses' : false } 
                            aria-haspopup="true" 
                            aria-expanded={ horsesMenuActive ? 'true' : false } 
                            onClick={()=>setHorsesMenuActive(event.target)}
                            >
                            Horses
                        </Button> */}

                        {/* <Menu 
                            disableScrollLock={true} 
                            anchorEl={horsesMenuActive} 
                            open={Boolean(horsesMenuActive)} 
                            onClose={handleMenuClose}
                            >
                            <MenuItem onClick={(path)=>handleMenuClick("stallions")}>Stallions</MenuItem>
                            <MenuItem onClick={(path)=>handleMenuClick("mares")}>Mares</MenuItem>
                            <MenuItem onClick={(path)=>handleMenuClick("colts")}>Colts</MenuItem>
                            <MenuItem onClick={(path)=>handleMenuClick("fillies")}>Fillies</MenuItem>
                            <MenuItem onClick={(path)=>handleMenuClick("geldings")}>Geldings</MenuItem>
                        </Menu> */}

                        {/* <Button 
                            className="navigation-button-toolbar"
                            variant="text" 
                            onClick={(path)=>handleMenuClick("contact")}
                            >
                            Contact
                        </Button> */}

                        {/* { user.id && 
                            <Button 
                                className="navigation-button-toolbar"
                                variant="text" 
                                onClick={(path)=>handleMenuClick("admin")}
                                >
                                Admin
                            </Button> 
                        } */}

                        {/* <IconButton 
                            className="navigation-button-toolbar-icon" 
                            href={facebookLink}
                            target="_blank"
                            >
                            <FacebookIcon />
                        </IconButton> */}

                    </div>

                {/* </Toolbar> */}

            </AppBar>
        </>
    );
    
};