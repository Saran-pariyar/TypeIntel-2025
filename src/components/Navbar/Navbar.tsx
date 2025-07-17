import React from 'react'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='nav-logo-container'>

                <a href="/" className='nav-logo' aria-label="TypeIntel Home">
                    TypeIntel
                </a>
            </div>
            <div className="hamburger-menu" id="hamburger-menu">
                <span className="ham-line"></span>
                <span className="ham-line"></span>
                <span className="ham-line"></span>

            </div>

            <ul className='nav-list'>
                <li>
                    <Link className='nav-links' href="/Categories">Categories</Link>
                </li>
                <li>
                    <Link className='nav-links' href="/about">About</Link>
                </li>
                <li>
                    <Link className='nav-links' href="/contact">Contact</Link>
                </li>
                <li>
                    <button className='sign-in-btn nav-links' type="button"> Sign In </button>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar