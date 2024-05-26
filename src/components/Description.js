import React from 'react'
import './Description.css'
import DestinationData from './DestinationData'
import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'

const Description = () => {
    return (
        <>
            <div className="description">
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame.</p>
                <DestinationData 
                cls="first-des"
                heading="Taal Volcano, Batangas"
                text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis quidem asperiores quia consequuntur quasi aperiam! Fugit, laborum voluptas aspernatur et, ducimus libero consectetur accusantium quos nesciunt unde nemo expedita."
                img1={Mountain1}
                img2={Mountain2}
                />
                <DestinationData 
                cls="second-des"
                heading="Mt. Daguldul, Batangas"
                text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis quidem asperiores quia consequuntur quasi aperiam! Fugit, laborum voluptas aLorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perferendis quidem asperiores quia consequuntur quasi aperiam! Fugit, laborum voluptas aspernatur et, ducimus libero spernatur et, ducimus libero consectetur accusantium quos nesciunt unde nemo expedita."
                img1={Mountain3}
                img2={Mountain4}
                />
            </div>
        </>
    )
}

export default Description