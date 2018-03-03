import { createStore, applyMiddleware } from 'redux'
import {logic} from './reducer'
import logger from 'redux-logger'


export const store = createStore(
  logic,
  applyMiddleware(logger)
)
