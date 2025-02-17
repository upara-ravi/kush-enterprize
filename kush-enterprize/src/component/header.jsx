import { useState } from 'react'
import { Link } from 'react-router-dom';

import './header.css'



function Header() {
    return (
        <>
            <div className='header'>
                <div className='header-divs first-div'>
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className='header-divs'>Kush</div>
                <div className='header-divs third-div'>
                    <Link to="/login" className='login-link'>Login</Link>
                    <a className='cart' href="">
                        <img src="./images/cart.svg" alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}
export default Header