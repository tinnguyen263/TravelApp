/* eslint-disable no-console */
import initialState from "./initialState";
import * as types from "../constants/actionTypes";


const rootReducer = (state = initialState, action) => {
    // console.warn(state);
    // console.warn(action);
    switch (action.type) {
        case types.PERSIST_LOGIN:
            return {
                ...state,
                auth: {
                    isLoggedIn: true,
                    email: action.payload.email,
                    userName: action.payload.userName,
                    token: action.payload.token
                }
            };
        case types.LOGOUT:
            return {
                ...state,
                auth: {
                    isLoggedIn: false,
                    email: null,
                    userName: null,
                    token: null
                }
            };
        default:
            return state;
    }
};

export default rootReducer;