/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';

export const login = (email, password) => ({
    type: actionTypes.LOGIN,
    payload: { email, password }
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});