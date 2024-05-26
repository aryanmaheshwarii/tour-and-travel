import React from 'react'
import './Footer.css'

const Footer = () => {
    const name = [
        "facebook", "instagram", "behance", "twitter"
    ];

    const footerCol1 = [
        "ChangeLog", "status", "License", "All Versions"
    ];

    const footerCol2 = [
        "GitHub", "Issues", "Project", "Twitter"
    ];

    const footerCol3 = [
        "support", "TroubleShooting", "Conatct Us"
    ];

    const footerCol4 = [
        "Terms of Service", "Privecy Policy", "License"
    ];

    return (
        <>
            <div className="footer">

                <div className="top">

                    <div>
                        <h1>Trippy</h1>
                        <p>Choose Your Favrouite Destination.</p>
                    </div>

                    <div>
                        {
                            name.map((element) => {
                                return (
                                    <a href="/">
                                        <i className={`fa-brands fa-${element}-square`}></i>
                                    </a>
                                )
                            })
                        }
                    </div>

                </div>

                <div className="bottom">
                    <div>
                        <h3>Project</h3>
                        {
                            footerCol1.map((element) => {
                                return (
                                    <a href="/">{element}</a>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3>Community</h3>
                        {
                            footerCol2.map((element) => {
                                return (
                                    <a href="/">{element}</a>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3>Help</h3>
                        {
                            footerCol3.map((element) => {
                                return (
                                    <a href="/">{element}</a>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3>Others</h3>
                        {
                            footerCol4.map((element) => {
                                return (
                                    <a href="/">{element}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer