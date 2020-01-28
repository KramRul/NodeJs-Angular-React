import { combineReducers } from 'redux'
import { pageReducer } from './header.reducer'
import { userReducer } from './sidebar.reducer'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
})
