import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './NavBar'

function App () {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/about' exact component={About} />
            <Route path='/articles-list' exact component={ArticlesListPage} />
            <Route path='/article/:name' exact component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
