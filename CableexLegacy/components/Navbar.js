import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img className="nav-logo" src="../assets/logo-1.png" alt=""></img>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><Link to='/' className="nav-links" onClick={closeMobileMenu}>About Us</Link></li>
                        <li className='nav-item'><Link to='/cabling' className="nav-links" onClick={closeMobileMenu}>Network Cabling</Link></li>
                        <li className='nav-item'><Link to='/security' className="nav-links" onClick={closeMobileMenu}>Security Solutions</Link></li>
                        <li className='nav-item'><Link to='/partnership' className="nav-links" onClick={closeMobileMenu}>Business Partnership</Link></li>
                        <li><Link to='/contactus' className="nav-links-mobile" onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' link='/contactUs'>Contact Us</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
