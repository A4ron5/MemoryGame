import { createStore, applyMiddleware } from 'redux'
import {logic} from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(
  logic,
  applyMiddleware(logger, thunk)
)
