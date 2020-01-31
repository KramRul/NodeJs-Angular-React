import * as SidebarActions from '../actions/sidebar.actions'

const initialState = {
  responseModel: {},
  isFetching: false,
  error: '',
}

export function sidebarReducer(state = initialState, action: any) {
  switch (action.type) {
    case SidebarActions.LOAD_DATA_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case SidebarActions.LOAD_DATA_SUCCESS:
      return { ...state, responseModel: action.payload, isFetching: false, error: '' }

    case SidebarActions.LOAD_DATA_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    case SidebarActions.GO_TO_PRODUCTS_BY_CATEGORY_PAGE_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case SidebarActions.GO_TO_PRODUCTS_BY_CATEGORY_PAGE_SUCCESS:
      return { ...state, isFetching: false, error: '' }

    case SidebarActions.GO_TO_PRODUCTS_BY_CATEGORY_PAGE_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }
    default:
      return state
  }
}
