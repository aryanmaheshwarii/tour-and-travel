import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import image from '../assets/12.jpg'
import Description from '../components/Description'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                HeroImg={image}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                BtnText="Travel Plan"
                url="/"
                btnCls="show"
            />
            <Description />
            <Trip />
            <Footer />
        </>
    )
}

export default Home