import React from 'react'
import './AboutUs.css'
import AboutUs from './AboutUs'

const AboutData = () => {
    return (
        <>
            <div className="container">
                <AboutUs
                    Heading="Our History"
                    text="Trippy is owned and managed by trippy.ltd. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor aliquam eaque et quibusdam quo laboriosam voluptatum est at officiis repellat veniam nisi odit pariatur magnam, aspernatur totam incidunt possimus quasi nostrum. Exercitationem cumque cum, nostrum ratione saepe iure reiciendis animi!"
                />

                <AboutUs
                    Heading="Our Mission"
                    text="Trippy is owned and managed by trippy.ltd. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor aliquam eaque et quibusdam quo laboriosam voluptatum est at officiis repellat veniam nisi odit pariatur magnam, aspernatur totam incidunt possimus quasi nostrum. Exercitationem cumque cum, nostrum ratione saepe iure reiciendis animi!"
                />

                <AboutUs
                    Heading="Our Vision"
                    text="Trippy is owned and managed by trippy.ltd. Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
                />
            </div>
        </>
    )
}

export default AboutData