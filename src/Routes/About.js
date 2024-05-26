import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import image from '../assets/night.jpg'
import Footer from '../components/Footer'
import AboutData from '../components/AboutData'

const About = () => {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-about"
        HeroImg={image}
        title="About"
      />
      <AboutData />
      <Footer />
    </>
  )
}

export default About