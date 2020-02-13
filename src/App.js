import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Homepage'
import About from './Components/About'
import ArticlePage from './Components/ArticlePage'
import ArticlesList from './Components/ArticlesList'

function App () {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' exact component={About} />
        <Route path='/articles-list' exact component={ArticlesList} />
        <Route path='/article-page' exact component={ArticlePage} />
      </div>
    </Router>
  )
}

export default App
