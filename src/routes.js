import React from 'react'
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import createHistory from 'history/createMemoryHistory'
import { store } from './store'
import { start } from './features/start'
import { game } from './features/game'
import { end } from './features/end'

export const history = createHistory({
  initialEntries: ['/end']
});

export const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <Route path='/' exact component={ start } />
        <Route path='/game' exact component={ game } />
        <Route path='/end' exact component={ end } />
      </React.Fragment>
    </Router>
  </Provider>
)