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
        default:
            return state;
    }
};

export default rootReducer;