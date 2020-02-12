import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Homepage'

function App () {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Homepage} />
      </div>
    </Router>
  )
}

export default App
