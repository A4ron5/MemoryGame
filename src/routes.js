import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import { start } from './features/start'
import { game } from './features/game'
import { end } from './features/end'

export const Routes = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path='/' exact component={ start } />
        <Route path='/game' exact component={ game } />
      </React.Fragment>
    </Router>
  </Provider>
)