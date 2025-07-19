import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Buy from '../../components/Buy/Buy'
import Sell from '../../components/Sell/Sell'
import AboutUs from '../../components/AboutUs/AboutUs'
import StudentReviews from '../../components/StudentReviews/StudentReviews'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
        <Buy></Buy>
        <Sell></Sell>
        <AboutUs></AboutUs>
        <StudentReviews></StudentReviews>
        <Footer></Footer>
    </div>
  )
}

export default Home
