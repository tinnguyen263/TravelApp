/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../../constants/actionTypes';


const fetchAuthenticate = (email, password) => fetch(`http://travel-app.speedup.world/api/login?email=${email}&password=${password}`, {
    method: 'POST'
});

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

export const persistUser = userData => ({
    type: actionTypes.AUTH_PERSIST_USER_DATA,
    payload: userData
});

export const authenticate = (email, password) => dispatch => {
    dispatch(showLoading());
    fetchAuthenticate(email, password).then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // login success
                dispatch(persistUser(responseData.data));
            } else {
                dispatch(showMessage(responseData.message));
            }
        })
        .catch(error => {
            dispatch(showMessage(error.message));
        })
        .finally(() => dispatch(hideLoading()));
};