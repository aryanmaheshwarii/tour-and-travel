import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import image from '../assets/night.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

const Services = () => {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-about"
        HeroImg={image}
        title="Services"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Services