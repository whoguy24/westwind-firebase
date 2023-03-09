// Import Styles
import styles from '@/styles/home.module.css'

// Import MUI Components
import Typography from '@mui/material/Typography';

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

    </>
  )
}