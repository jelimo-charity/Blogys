import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import {FaBars, FaTimes} from 'react-icons/fa'
const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <div className='navbar'>
        <h2 className='logo'>Blogys</h2>
        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}>
            <Link to="/" className="link">
                <li>Home</li>
            </Link>
            <Link to="/blogs" className="link">
                <li>Blogs</li>
            </Link>
            <Link to="/contact" className="link">
                <li>Contact</li>
            </Link>
        </ul>
        <button className='mobile-menu-bar' 
        onClick={ () => { setIsMobile(!isMobile)}}>
            {isMobile ? <FaTimes /> : <FaBars /> }
        </button>
      
    </div>
  )
}

export default Header
