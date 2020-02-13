import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ArticlePage from './pages/ArticlePage'
import ArticlesList from './pages/ArticlesList'
import NavBar from './NavBar'

function App () {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' exact component={About} />
          <Route path='/articles-list' exact component={ArticlesList} />
          <Route path='/article/:name' exact component={ArticlePage} />
        </div>
      </div>
    </Router>
  )
}

export default App
