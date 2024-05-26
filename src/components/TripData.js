import React from 'react'
import './Trip.css'

const TripData = ({heading, text, image}) => {
    return (
        <>
            <div className="t-card">
                <div className="t-image">
                    <img src={image} alt="" />
                </div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TripData