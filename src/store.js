import { createStore } from 'redux'
import {logic} from './features/card-list/reducer'

export const store = createStore(logic)
