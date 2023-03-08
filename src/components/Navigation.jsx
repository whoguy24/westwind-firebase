///////////////////////////////////////////////////////
///// COMPONENT MODULES ///////////////////////////////
///////////////////////////////////////////////////////

// Import Styles
import styles from '@/styles/navigation.module.css'

// Import React Libraries
import { useState } from 'react';

// Import Next Components
import Link from 'next/link'

// Import MUI Components
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

///////////////////////////////////////////////////////
///// COMPONENT DESCRIPTION ///////////////////////////
///////////////////////////////////////////////////////

// The Navigation component renders the navigation bar on the top of the website.
// ----------------------------------------------------
// It is used to navigate to multiple pages in the web application. 
// Makes use of the Next.js "Link" component to define the route to navigate to.
// ----------------------------------------------------
// This component has state that defines whether or not the "HORSES" menu should be open.
// Navigation bar incorporates container divs that allow grouping of elements to the left and right sides.
// Navigation bar is intended to be globally available across the web application at all times.
// ----------------------------------------------------
// Used in:
// pages/_app.js

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

export default function Navigation() {

    // Define Local State
    const [menuHorses, setMenuHorses] = useState(false);
    
    // Render DOM
    return (
        <>

            {/* Navigation Bar */}
            <AppBar id={ styles.navigation_bar } position="static">
                <div id={ styles.navigation_container_left } >

                    {/* Westwind Morgans Home Link */}
                    <Link href="/" id={ styles.navigation_button_home } >Westwind Morgans</Link>

                </div>
                <div id={ styles.navigation_container_right } >

                    {/* Horses Link */}
                    <Button className={ styles.navigation_button } onClick={()=>setMenuHorses(event.target)}>Horses</Button>
                    <Menu disableScrollLock={true} anchorEl={menuHorses} open={Boolean(menuHorses)} onClose={()=>setMenuHorses(false)}>
                        <Link href="/stallions" >
                            <MenuItem onClick={()=>setMenuHorses(false)}>Stallions</MenuItem>
                        </Link>
                        <Link href="/mares" >
                            <MenuItem onClick={()=>setMenuHorses(false)}>Mares</MenuItem>
                        </Link>
                        <Link href="/colts" >
                            <MenuItem onClick={()=>setMenuHorses(false)}>Colts</MenuItem>
                        </Link>
                        <Link href="/fillies" >
                            <MenuItem onClick={()=>setMenuHorses(false)}>Fillies</MenuItem>
                        </Link>
                        <Link href="/geldings" >
                            <MenuItem onClick={()=>setMenuHorses(false)}>Geldings</MenuItem>
                        </Link>
                    </Menu>

                    {/* Contact Link */}
                    <Link href="/contact" >
                        <Button className={ styles.navigation_button }>Contact</Button>
                    </Link>

                    {/* TODO: Incorporate admin button when admin layer is built */}
                    {/* <Link href="/admin" >
                        <Button className={ styles.navigation_button }>Admin</Button> 
                    </Link> */}

                    {/* Facebook Link */}
                    <Link href="https://www.facebook.com/people/Westwind-Morgans/100063575859271/" target="_blank">
                        <IconButton id={ styles.navigation_button_fb }>
                            <FacebookIcon />
                        </IconButton>
                    </Link>

                </div>

            </AppBar>

        </>
    );
    
};