/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';

export const login = (email, password) => ({
    type: actionTypes.LOGIN,
    payload: { email, password }
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});

export const saveAuthenticationData = userData => ({
    type: actionTypes.AUTH_PERSIST_USER_DATA,
    payload: userData
});

export const deleteAuthenticationData = () => ({
    type: actionTypes.AUTH_DELETE_USER_DATA
});