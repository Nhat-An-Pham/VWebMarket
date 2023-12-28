import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const loginClick = () => {
        navigate("/auth-login")
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? "navbar navbaractive" : "navbar"}>
            <ul>
                <li id='logo' style={{cursor:"pointer"}}><h1>VWeb Market</h1></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link class='dropdown-arrow'>Services</Link>
                    <ul class='sub-navbars'>
                        <li><Link to="/service-website">Website development</Link></li>
                        <li><Link to="/service-mobile">Mobile development</Link></li>
                        <li><Link to="/service-design">Design</Link></li>
                    </ul>
                </li>
                <li><Link href='http://'>Templates</Link></li>
                <li><Link href='http://'>Forum</Link></li>
                <li><Link href='http://'>Reviews</Link></li>
                <li><Link href='http://'>Contact</Link></li>
                <li id='button'><button id='login' onClick={() => loginClick()}>Login</button></li>
            </ul>
        </nav>
    )
}

export default Navbar