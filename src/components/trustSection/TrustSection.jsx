import React from 'react'
import styles from "./TrustSection.module.css"
import Container from '../common/Container'
import { Truck,ShieldCheck,Lock,UserRoundCheck } from 'lucide-react'


function TrustSection() {
  return (

    <section className={styles.trustSection}>


            <div className={styles.trustSectionHeader}>
                <h2>Why Choose <span> Poonjora</span></h2>
                <p>Bringing purity, authenticity, and devotion to every home with handpicked selected puja essentials.</p>
            </div>
        

            <div className={styles.trustSectionBody}>
            <Container>


              <div className={styles.trustSectionBodyBadges}>
                <div className={styles.trustSectionBodyBadge}>
                  <Truck size={50}/>
                  <h4>Free Shipping</h4>
                  <p>On orders above ₹499</p>
                </div>

                <div className={styles.trustSectionBodyBadge}>
                  <ShieldCheck size={50}/>
                  <h4>100% Authentic</h4>
                  <p>Temple-quality puja products</p>
                </div>

                <div className={styles.trustSectionBodyBadge}>
                  <Lock size={50}/>
                  <h4>Secure Payments</h4>
                  <p>UPI • Cards • COD</p>
                </div>

                <div className={styles.trustSectionBodyBadge}>
                  <UserRoundCheck size={50}/>
                  <h4>Trusted By Devotees</h4>
                  <p>Thousands of happy customers</p>
                </div>

              </div>

            </Container>
            </div>

        



    </section>
    
    
  )
}

export default TrustSection