import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/index.reducer.'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
