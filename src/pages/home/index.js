///////////////////////////////////////////////////////
///// PAGE MODULES ////////////////////////////////////
///////////////////////////////////////////////////////

// Import Styles
import styles from "@/styles/home.module.css";

// Import React Components
import { useEffect } from "react";

// Import Next Components
import Link from "next/link";

// Import Saga Redux Components
import { useDispatch } from "react-redux";

// Import MUI Components
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// Import Components
import Header from "@/components/Header.jsx";

///////////////////////////////////////////////////////
///// PAGE DESCRIPTION ////////////////////////////////
///////////////////////////////////////////////////////

// The Home.js page is used as a landing page for any users entering the web application.
// It displays our main hero image, as well as major card links to primary pages.
// ----------------------------------------------------
// Additionally, this page provides basic introductory details to other aspects of Westwind Morgans business.
// At this time, this is mostly limited to short summaries of foundation breeding.
// However, more content may be added in the future.

///////////////////////////////////////////////////////
///// PAGE FUNCTION ///////////////////////////////////
///////////////////////////////////////////////////////

export default function Home() {

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch({ type: "FETCH_HORSES" });
  }, []);
  
  return (
    <>

      {/* Headline - 100% Old Foundation Ranching Bloodlines */}
      <Typography id={styles.home_header_foundation}>100% Old Foundation Ranching Bloodlines</Typography>

      {/* Hero Image - Westwind Otto with Photo License Caption */}
      <div id={styles.home_hero_container}>
        <img id={styles.home_hero_image} src="/assets/home_hero.png" alt="home"/>
        <Typography id={styles.home_hero_caption}>
          National Reined<br/>
          Cowhorse Association<br/>
          Open Competition<br/>
          Zane Davis Performance Horses<br/>
          Zane Davis Trainer/Rider<br/>
          Rockin Horse Photography Image
        </Typography>
      </div>

      {/* Headline - Home of Westwind Otto */}
      <Typography id={styles.home_header_otto}>Home of Westwind Otto</Typography>
      
      {/* Horses Section */}
      <div className="container">
        <div className="content">
        <Header title="Horses" />
          <div id={styles.home_horses_grid}>

            {/* Stallion Link */}
            <Card className={styles.home_horses_card}>
              <CardActionArea>
                <Link href="/stallions">
                  <CardMedia
                    component="img"
                    image="/assets/home_stallions.png"
                    alt="stallions"
                  />
                  <Typography className={styles.home_horses_card_label}>Stallions</Typography>
                </Link>
              </CardActionArea>
            </Card>

            {/* Mares Link */}
            <Card className={styles.home_horses_card}>
              <CardActionArea>
                <Link href="/mares">
                  <CardMedia
                    component="img"
                    image="/assets/home_mares.png"
                    alt="mares"
                  />
                  <Typography className={styles.home_horses_card_label}>Mares</Typography>
                </Link>
              </CardActionArea>
            </Card>

            {/* Geldings Link */}
            <Card className={styles.home_horses_card}>
              <CardActionArea>
                <Link href="/geldings">
                  <CardMedia
                    component="img"
                    image="/assets/home_geldings.png"
                    alt="geldings"
                  />
                  <Typography className={styles.home_horses_card_label}>Geldings</Typography>
                </Link>
              </CardActionArea>
            </Card>

            {/* Colts Link */}
            <Card className={styles.home_horses_card}>
              <CardActionArea>
                <Link href="/colts">
                  <CardMedia
                    component="img"
                    image="/assets/home_colts.png"
                    alt="colts"
                  />
                  <Typography className={styles.home_horses_card_label}>Colts</Typography>
                </Link>
              </CardActionArea>
            </Card>

            {/* Fillies Link */}
            <Card className={styles.home_horses_card}>
              <CardActionArea>
                <Link href="/fillies">
                  <CardMedia
                    component="img"
                    image="/assets/home_fillies.png"
                    alt="fillies"
                  />
                  <Typography className={styles.home_horses_card_label}>Fillies</Typography>
                </Link>
              </CardActionArea>
            </Card>

            {/* Testimonials Link */}
            <Card className={styles.home_horses_card}>
              <CardActionArea>
                <Link href="/testimonials">
                  <CardMedia
                    component="img"
                    image="/assets/home_testimonials.png"
                    alt="testimonials"
                  />
                  <Typography className={styles.home_horses_card_label}>Testimonials</Typography>
                </Link>
              </CardActionArea>
            </Card>

          </div>
        </div>
      </div>

      {/* Why Foundation Section */}
      <div className="container">
        <div className="content">
        <Header title="Why Foundation" />
          <div className={styles.home_info_grid}>
            <img className={styles.home_info_image} src="/assets/home_foundation.png" alt="why_foundation"/>
            <Typography className={styles.home_info_text} >
              Our foundation stock goes back to many of 
              the historic Morgan stock horses 
              from early ranches of Kansas, Texas, 
              Oklahoma, and the Southwest.<br/><br/>
              Our breeding is a proven nick of bloodlines, with 
              sires going back to the Warner Angus Ranch of Dodge City, 
              Kansas and broodmares from the Sweet's 
              family in Jewell County Kansas.<br/><br/>
            </Typography>
          </div>
        </div>
      </div>

      {/* Breeding Section */}
      <div className="container">
        <div className="content">
        <Header title="Breeding" />
          <div className={styles.home_info_grid}>
            <img className={styles.home_info_image} src="/assets/home_breeding.png" alt="breeding"/>
            <Typography className={styles.home_info_text} >
            We strive to carry on the tradition of the working cow horse 
              which the Warner Angus Ranch has produced for several generations 
              and is carried on by the family to this day.<br/><br/>
              If you are looking for a Morgan horse that goes back to the 
              original stock horse of the West you have come to the right place.<br/><br/>
            </Typography>
          </div>
        </div>
      </div>

    </>
  );
};