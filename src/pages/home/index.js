// Import Styles
import styles from '@/styles/home.module.css'

// Import Next Components
import Link from 'next/link'

// Import Components
import Header from "@/components/Header.jsx"

// Import MUI Components
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Home() {
  return (
    <>

      <Typography id={styles.home_header_foundation}>100% Old Foundation Ranching Bloodlines</Typography>

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

      <Typography id={styles.home_header_otto}>Home of Westwind Otto</Typography>


      <div className="container">
        <div className="content">

          <Header title="Horses" />

          <div id={styles.home_horses_grid}>

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
  )
}