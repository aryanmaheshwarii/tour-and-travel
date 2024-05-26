import React, { useState } from 'react'
import MenuItems from './MenuItems'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const [icon, seticon] = useState('true');
    const [cls, setcls] = useState("nav-menu");
    const { loginWithRedirect } = useAuth0();

    const iconHandler = (() => {
        seticon(!icon);
        icon ? setcls("nav-menu active") : setcls("nav-menu");
    })

    return (
        <>
            <nav className="NavbarItems">

                <h1 className="navbar-logo">Trippy</h1>

                <div className="menu-icons" onClick={iconHandler}>
                    {icon ? <i className="fas fa-bars" ></i> : <i className="fas fa-times"></i>}
                </div>

                <ul className={cls}>
                    {
                        MenuItems.map((items, index) => {
                            return (
                                <li key={index}>
                                    <Link className={items.cName} to={items.url}>
                                        <i className={items.icon}></i>{items.title}
                                    </Link>
                                </li>
                            )
                        })
                    }

                    <button className="signup-btn">
                        <Link className='btnn' to="/signup">Sign up</Link>
                        {/* <button className='btnn' onClick={() => loginWithRedirect()}>Log In</button> */}
                    </button>

                </ul>

            </nav>
        </>
    )
}

export default NavBar