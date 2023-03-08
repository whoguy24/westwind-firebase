import '@/styles/globals.css'

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme.js';
import CssBaseline from '@mui/material/CssBaseline';

import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>  
      {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <Navigation />
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
