import { takeEvery } from 'redux-saga/effects';
import { authenticate, logout } from "./authentication-sagas";
import * as actionTypes from './../actions/actionTypes';

function* rootSaga() {
    yield [
        takeEvery(actionTypes.LOGIN, authenticate),
        takeEvery(actionTypes.LOGOUT, logout)
    ];
}

export default rootSaga;