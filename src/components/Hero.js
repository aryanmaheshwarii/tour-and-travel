import React from 'react'
import './Hero.css'

const Hero = ({cName, HeroImg, title, text, BtnText, url, btnCls}) => {
  return (
    <>
        <div className={cName}>
            <img src={HeroImg} alt="heroImg" />
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url} className={btnCls}>{BtnText}</a>
            </div>
        </div>
    </>
  )
}

export default Hero