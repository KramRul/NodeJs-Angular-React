export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST'
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS'
export const LOAD_DATA_FAIL = 'LOAD_DATA_FAIL'

export const GO_TO_PRODUCTS_BY_CATEGORY_PAGE_REQUEST = 'GO_TO_PRODUCTS_BY_CATEGORY_PAGE_REQUEST'
export const GO_TO_PRODUCTS_BY_CATEGORY_PAGE_SUCCESS = 'GO_TO_PRODUCTS_BY_CATEGORY_PAGE_SUCCESS'
export const GO_TO_PRODUCTS_BY_CATEGORY_PAGE_FAIL = 'GO_TO_PRODUCTS_BY_CATEGORY_PAGE_FAIL'

let responseModel = {};

export function loadData() {
    return dispatch => {
        dispatch({
            type: LOAD_DATA_REQUEST,
            payload: null,
        })

        try {

            dispatch({
                type: LOAD_DATA_SUCCESS,
                payload: responseModel,
            })
    
        } catch (e) {
            dispatch({
                type: LOAD_DATA_FAIL,
                error: true,
                payload: new Error(e),
            })
        }
    }
}

export function goToProductsByCategoryPage() {
    return dispatch => {
        dispatch({
            type: GO_TO_PRODUCTS_BY_CATEGORY_PAGE_REQUEST,
            payload: null,
        })

        try {

            dispatch({
                type: GO_TO_PRODUCTS_BY_CATEGORY_PAGE_SUCCESS,
                payload: null,
            })
    
        } catch (e) {
            dispatch({
                type: GO_TO_PRODUCTS_BY_CATEGORY_PAGE_FAIL,
                error: true,
                payload: new Error(e),
            })
        }
    }
}