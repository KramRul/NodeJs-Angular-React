export const LOAD_CURRENT_USER_REQUEST = 'LOAD_CURRENT_USER_REQUEST'
export const LOAD_CURRENT_USER_SUCCESS = 'LOAD_CURRENT_USER_SUCCESS'
export const LOAD_CURRENT_USER_FAIL = 'LOAD_CURRENT_USER_FAIL'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

let isUserLoggedIn = false;
let isUserAdmin = false;
let user = {};

function getCurrentUser(dispatch: any) {
    try {
        
        dispatch({
            type: LOAD_CURRENT_USER_SUCCESS,
            payload: {user, isUserLoggedIn, isUserAdmin},
        })

    } catch (e) {
        dispatch({
            type: LOAD_CURRENT_USER_FAIL,
            error: true,
            payload: new Error(e),
        })
    }
}

function logoutFrom(dispatch: any) {
    try {

        dispatch({
            type: LOGOUT_SUCCESS,
            payload: {user, isUserLoggedIn, isUserAdmin},
        })

    } catch (e) {
        dispatch({
            type: LOGOUT_FAIL,
            error: true,
            payload: new Error(e),
        })
    }
}

export function loadCurrentUser() {
    return (dispatch: any) => {
        dispatch({
            type: LOAD_CURRENT_USER_REQUEST,
            payload: null,
        })

        getCurrentUser(dispatch);
    }
}

export function logout() {
    return (dispatch: any) => {
        dispatch({
            type: LOGOUT_REQUEST,
            payload: null,
        })

        logoutFrom(dispatch);
    }
}