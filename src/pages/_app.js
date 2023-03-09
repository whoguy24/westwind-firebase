import '@/styles/globals.css'

import { StylesProvider } from "@material-ui/core/styles";

import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>  
      <StylesProvider injectFirst>
        <Navigation />
        <div id="app">
          <Component {...pageProps} />
        </div>
      </StylesProvider>
    </>
  );
}
