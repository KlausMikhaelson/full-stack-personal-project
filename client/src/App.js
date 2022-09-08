import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import About from './pages/About'
import ArticlesList from './pages/ArticlesList'
import ArticlePage from './pages/ArticlePage'
import Navbar from './Navbar'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div id='page-body'></div>
      <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/about' element={<About /> } />
        <Route path='/articles-list' element={<ArticlesList />} />
        <Route path='/article/:name' element={<ArticlePage />} />
      </Routes>
    </div>
  )
}

export default App
