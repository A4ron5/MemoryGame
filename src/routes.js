import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import {start} from './features/start'
import {end} from './features/end'

export const Routes = () => (
  <Provider>
    <Router>
      <Route path='/' component={end} />
    </Router>
  </Provider>
)