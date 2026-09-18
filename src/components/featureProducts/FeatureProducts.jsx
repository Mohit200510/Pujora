import React from 'react'
import styles from './FeatureProducts.module.css'
import Container from '../common/Container'
import productOne from "../../assets/featureCard1.png"
import productTwo from "../../assets/featureCard2.png"
import productThree from "../../assets/featureCard3.png"
import productFour from "../../assets/featureCard4.png"
import productFive from "../../assets/featureCard5.png"
import productSix from "../../assets/featureCard6.png"
import productSeven from "../../assets/featureCard7.png"
import productEight from "../../assets/featureCard8.png"
import FeatureProduct from './FeatureProduct'
import { ArrowRight } from 'lucide-react'

function FeatureProducts() {
  return (

    <section className={styles.sectionProducts}>
        <Container>
            <div className={styles.featureProductsSecHeader}>
                <h2>Divine Essentails</h2>
                <p>Handpicked essentials for your daily puja and religious ceremonies</p>
            </div>

            <div className={styles.FeatureProductsMain}>

                

                <div className={styles.featureProductsBoxes}>

                    <FeatureProduct image = {productOne} name = "Pujora Premium Sandalwood Dhoop Sticks (Pack of 6)" price ="₹1,299" mrp = "₹1,999" ></FeatureProduct>
                    <FeatureProduct image = {productTwo} name = "Brass Puja Thali Set (7 Pcs)" price ="₹349" mrp = "₹499" ></FeatureProduct>
                    <FeatureProduct image = {productThree} name = "Marble Lord Ganesha Idol (12 Inch)" price ="₹2,499" mrp = "₹3,499" ></FeatureProduct>
                    <FeatureProduct image = {productFour} name = "Brass Panchmukhi Diya (Large)" price ="₹1,199" mrp = "₹1,799" ></FeatureProduct>
                    <FeatureProduct image = {productFive} name = "Chameli (Jasmine) Oil 900ml |Special Chameli Puja Oil (900 ml)" price ="₹489" mrp = "₹599" ></FeatureProduct>
                    <FeatureProduct image = {productSix} name = "Camphor Tablet 100g Jar - Pack of 1 | For Puja, Festivals & Other Religious Ritual" price ="₹190" mrp = "₹299" ></FeatureProduct>
                    <FeatureProduct image = {productSeven} name = "Small Size Pure Brass Akhand Diya With Adjustable Bati (110ml, Small 3.5)" price ="₹639" mrp = "₹1,499" ></FeatureProduct>
                    <FeatureProduct image = {productEight} name = "Devdarshan Desi Wet (Geela) Dhoop Sticks | 240 Sticks (Pack of 12 Units) " price ="₹306" mrp = "₹449" ></FeatureProduct>
                    
                </div>

            </div>

            <div className={styles.FeatureProductsSeeMore}>
                <button>View All Products <ArrowRight /></button>
            </div>


        </Container>
    </section>
    
  )
}

export default FeatureProducts