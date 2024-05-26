import React from 'react'
import './Trip.css'
import TripData from './TripData'
import image1 from '../assets/5.jpg'
import image2 from '../assets/8.jpg'
import image3 from '../assets/6.jpg'

const Trip = () => {
    return (
        <>
            <div className="trip">
                <h1>Recent Trips</h1>
                <p>You can discover unique destinations using Google Maps.</p>
                <div className="trip-card">
                    <TripData
                        heading="Trip to Indonesia"
                        text="Indonesia Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo recusandae ipsum non nulla. Omnis praesentium quam aspernatur vero unde, reiciendis, corrupti sed minima assumenda nihil at! Beatae earum doloremque dolores."
                        image={image1}
                    />
                    <TripData
                        heading="Trip to Malaysia"
                        text="Malesia Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo recusandae ipsum non nulla. Omnis praesentium quam aspernatur vero unde, reiciendis, corrupti sed minima assumenda nihil at! Beatae earum doloremque dolores."
                        image={image2}
                    />
                    <TripData
                        heading="Trip to France"
                        text="France, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo recusandae ipsum non nulla. Omnis praesentium quam aspernatur vero unde, reiciendis, corrupti sed minima assumenda nihil at! Beatae earum doloremque dolores."
                        image={image3}
                    />
                </div>
            </div>
        </>
    )
}

export default Trip