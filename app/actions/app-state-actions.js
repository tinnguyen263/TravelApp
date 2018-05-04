import * as actionTypes from "./actionTypes";

export const showLoading = () => ({
    type: actionTypes.APP_SET_LOADING,
    payload: {
        isLoading: true
    }
});

export const hideLoading = () => ({
    type: actionTypes.APP_SET_LOADING,
    payload: {
        isLoading: false
    }
});

export const showMessage = message => ({
    type: actionTypes.APP_SET_MESSAGE,
    payload: {
        message
    }
});

export const hideMessage = () => ({
    type: actionTypes.APP_SET_MESSAGE,
    payload: {
        message: null
    }
});