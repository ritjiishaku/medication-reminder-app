import React from 'react'
import Hero from './HomeSections/Hero'
import WhyChooseUs from './HomeSections/WhyChooseUs'
import CTA from './HomeSections/CTA'

const Home = () => {
  return (
    <div className='pt-16'>
      <Hero />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}

export default Home
