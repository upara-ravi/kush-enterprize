import { useState } from 'react'
import './header.css'



function Header() {
    return (
        <>
            <div className='header'>
                <div className='header-divs'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className='header-divs'>Kush</div>
                <div className='header-divs'>this is the third div</div>
            </div>
        </>
    )
}
export default Header