import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo2x.png'
import './styles.css'
export default function Navbar() {

    const [activeLink, setActiveLink] = useState('Home'); // Initialize active link state

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName); // Update active link state when NavLink is clicked
    };
    return <nav className="navbar navbar-expand-lg text-white">
        <div className="container">
            <NavLink className="navbar-brand d-flex justify-content-center align-items-center text-white" to="/">
                <img className="logo me-3" src={Logo} alt="" />
                <div className="logo-items">
                    <h1>Weather</h1>
                </div>
            </NavLink>
            <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-bars"></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className={`nav-item text-white rounded-top-2 ${activeLink === 'Home' ? 'active' : ''}`}>
                        <NavLink className="nav-link" onClick={() => handleNavLinkClick('Home')} to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className={`nav-item text-white ${activeLink === 'News' ? 'active' : ''}`}>
                        <NavLink className="nav-link" onClick={() => handleNavLinkClick('News')} to="/news">News</NavLink>
                    </li>
                    <li className={`nav-item text-white ${activeLink === 'About' ? 'active' : ''}`}>
                        <NavLink className="nav-link" onClick={() => handleNavLinkClick('About')} to="/about">About</NavLink>
                    </li>
                    <li className={`nav-item text-white ${activeLink === 'Photos' ? 'active' : ''}`}>
                        <NavLink className="nav-link" onClick={() => handleNavLinkClick('Photos')} to="/photos">Photos</NavLink>
                    </li>
                    <li className={`nav-item text-white border-0 ${activeLink === 'Contact' ? 'active' : ''}`}>
                        <NavLink className="nav-link bg" onClick={() => handleNavLinkClick('Contact')} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


}
