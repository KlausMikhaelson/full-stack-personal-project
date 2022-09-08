import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


const Navrbar = () => {
  return (
    <nav className='navBar'>
        <ul className='navBar-links'>
            <li className='navBar-links'>
                <Link style={{textDecoration: 'none'}} to="/">Home</Link>
            </li>
            <li className='navBar-links'>
                <Link style={{textDecoration: 'none'}} to="/about">about</Link>
            </li>
            <li className='navBar-links'>
                <Link style={{textDecoration: 'none'}} to="/articles-list">Articles</Link>
            </li>
            <li className='navBar-links'>
                <Link style={{textDecoration: 'none'}} to="/article">ArticlePage</Link>
            </li>
        </ul>
    </nav>

  )
}

export default Navrbar