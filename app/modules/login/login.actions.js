/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../../constants/actionTypes';

// TODO implement Login API
export const authenticate = (email, password) => ({
    type: actionTypes.PERSIST_LOGIN,
    payload: {
        email,
        userName: 'PV Chung',
        token: 'ndjnsJKSNnkj'
    }
});