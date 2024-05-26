import React from 'react'
import './AboutUs.css'

const AboutUs = ({Heading, text}) => {
    return (
        <>
            <div className="about-container">
                <h1>{Heading}</h1>
                <p>{text}</p>
            </div>
        </>
    )
}

export default AboutUs