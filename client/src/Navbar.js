import React from 'react'
import { Link } from 'react-router-dom'

const Navrbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
            <li>
                <Link to="/article-page">ArticlePage</Link>
            </li>
        </ul>
    </nav>

  )
}

export default Navrbar