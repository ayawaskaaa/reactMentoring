import {createStore} from 'react-redux'
import {initialState, rootReducer} from './rootReducer'

export const store = createStore(rootReducer, initialState)