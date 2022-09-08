import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import About from './pages/About'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'
import Navbar from './Navbar'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div id='page-body'></div>
      <Routes>
        <Route path='/' element={<Homepage />} exact />
        <Route path='/about' element={<About /> } />
        <Route path='/articles-list' element={<ArticlesListPage />} />
        <Route path='/article/:name' element={<ArticlePage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
