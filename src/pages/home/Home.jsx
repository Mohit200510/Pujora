import React from 'react'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/categories/Categories'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import TrustSection from '../../components/trustSection/TrustSection'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <Categories/>
        <FeatureProducts/>
        <TrustSection/>
        <Footer/>




    </div>
  )
}

export default Home