import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from '../Pages/StartPage'
import GamePage from '../Pages/GamePage'
import EndPage from '../Pages/EndPage'

export default () => (
  <Router>
    <div>
      <Route path='/' exact component={StartPage}/>
      <Route path='/game' exact component={GamePage}/>
      <Route path='/end' exact component={EndPage}/>
    </div>
  </Router>
)
