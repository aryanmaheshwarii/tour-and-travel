import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import image from '../assets/2.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-about"
        HeroImg={image}
        title="Contact"
      />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact