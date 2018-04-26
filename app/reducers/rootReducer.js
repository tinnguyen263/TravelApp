import initialState from "./initialState";
import * as types from "../constants/actionTypes";


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RETRIEVE_FLIGHTS:
            return state.flights;
        case types.RETRIEVE_NAV_ITEMS:
            return state.bottomNavItems;
        default:
            return state;
    }
};

export default rootReducer;