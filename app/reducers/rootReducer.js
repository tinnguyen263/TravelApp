/* eslint-disable no-console */
import initialState from "../initialState";
import * as types from "../actions/actionTypes";


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_PERSIST_USER_DATA:
            return Object.assign({}, state, {
                auth: {
                    ...state.auth,
                    isLoggedIn: true,
                    email: action.payload.email,
                    userName: action.payload.userName,
                    token: action.payload.token
                }
            });
        case types.AUTH_DELETE_USER_DATA:
            return Object.assign({}, state, {
                auth: {
                    ...state.auth,
                    isLoggedIn: false,
                    email: null,
                    userName: null,
                    token: null
                }
            });
        case types.APP_SET_MESSAGE:
            return Object.assign({}, state, {
                app: {
                    ...state.app,
                    message: action.payload.message
                }
            });
        case types.APP_SET_LOADING:
            return Object.assign({}, state, {
                app: {
                    ...state.app,
                    isLoading: action.payload.isLoading
                }
            });
        default:
            return state;
    }
};

export default rootReducer;