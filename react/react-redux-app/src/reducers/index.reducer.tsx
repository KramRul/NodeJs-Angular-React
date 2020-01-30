import { combineReducers } from 'redux'
import { headerReducer } from './header.reducer'
import { sidebarReducer } from './sidebar.reducer'

export const rootReducer = combineReducers({
  header: headerReducer,
  sidebar: sidebarReducer,
})
