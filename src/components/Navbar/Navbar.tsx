"use client";

import React, { useState } from 'react'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);


const navItems = [
    {href : "/Categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/Typing", label: "Typing" },
]

    return (
        <nav className="navbar">
            <div className='nav-logo-container'>

                <Link href="/" className='nav-logo' aria-label="TypeIntel Home">
                    TypeIntel
                </Link>
            </div>
            <div className={`hamburger-menu${isNavOpen ? " cross" : ""}`} id="hamburger-menu" onClick={() => setIsNavOpen(!isNavOpen)}>
                <span className="ham-line ham-line1"></span>
                <span className="ham-line ham-line2"></span>
                <span className="ham-line ham-line3"></span>

            </div>

            <ul className={`nav-list` + (isNavOpen ? ' nav-show' : '')}>

                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link className='nav-links' href={item.href} onClick={() => setIsNavOpen(false)}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <button className='sign-in-btn nav-links' type="button" onClick={() => setIsNavOpen(false)}> Sign In </button>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar