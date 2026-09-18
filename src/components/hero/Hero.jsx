import React from 'react'
import styles from "./Hero.module.css";
import Container from '../common/Container';
import banner from "../../assets/herobanner.png";
import Mobbanner from "../../assets/mob2.png"
import { LayoutGrid,ShoppingBag } from 'lucide-react';


function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bannerOverlay}>
      <Container>
        <img className={styles.bannerImg} src={banner}></img>
        <img className={styles.mobbanner} src={Mobbanner}></img>

        <div className={styles.heroWraper}>

          <div className={styles.heroContent}>

            <div className={styles.herotext}>

              <h1>India's Trusted<br/>Destination for<br/> Puja Essentials</h1>
              
              <p>Everything you need for daily worship and festive celebrations , delivered with trust across India.</p>
              <div className={styles.heroBtn}>


                
                  <button className={styles.heroBtnOne}><ShoppingBag style={{display: "block" ,position:"absolute"}}  stroke='var(--color-accent' />  Shop Now</button>
                  
                  <button className={styles.heroBtnTwo}><LayoutGrid style={{display: "block" ,position:"absolute"}} /> Explore Categories</button>
                  

              </div>

            </div>

            <div>

            </div>
            


          </div>

        </div>

        






      </Container>
      </div>
    </section>
  )
}

export default Hero