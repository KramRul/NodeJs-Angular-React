import * as HeaderActions from '../actions/header.actions'

const initialState = {
  user: {}, 
  isUserLoggedIn: false, 
  isUserAdmin: false,
  isFetching: false,
  error: '',
}

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case HeaderActions.LOAD_CURRENT_USER_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case HeaderActions.LOAD_CURRENT_USER_SUCCESS:
      return { ...state, user: action.payload.user, isUserLoggedIn: action.payload.isUserLoggedIn, isUserAdmin: action.payload.isUserAdmin, isFetching: false, error: '' }

    case HeaderActions.LOAD_CURRENT_USER_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    case HeaderActions.LOGOUT_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case HeaderActions.LOGOUT_SUCCESS:
      return { ...state, user: action.payload.user, isUserLoggedIn: action.payload.isUserLoggedIn, isUserAdmin: action.payload.isUserAdmin, isFetching: false, error: '' }

    case HeaderActions.LOGOUT_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }
    default:
      return state
  }
}
