/* eslint-disable import/prefer-default-export */
import * as actionTypes from './../../actions/actionTypes';

export const saveAuthenticationData = userData => ({
    type: actionTypes.AUTH_PERSIST_USER_DATA,
    payload: userData
});

export const deleteAuthenticationData = () => ({
    type: actionTypes.AUTH_DELETE_USER_DATA
});