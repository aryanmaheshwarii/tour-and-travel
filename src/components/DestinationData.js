import React from 'react'
import './Description.css'

const DestinationData = ({heading, text,img1, img2, cls}) => {
    return (
        <>
            <div className={cls}>
                <div className="desc-text">
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>
                <div className="image">
                    <img src={img1} alt="mountainImg" />
                    <img src={img2} alt="mountainImg2" />
                </div>
            </div>
        </>
    )
}

export default DestinationData