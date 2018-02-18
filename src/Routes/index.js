import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import StartPage from '../Pages/StartPage'
import GamePage from '../Pages/GamePage'
import EndPage from '../Pages/EndPage'

export default () => (
  <Provider>
    <Router>
      <div>
        <Route path='/' exact component={StartPage}/>
        <Route path='/game' exact component={GamePage}/>
        <Route path='/end' exact component={EndPage}/>
      </div>
    </Router>
  </Provider>
)
