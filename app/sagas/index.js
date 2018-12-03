import { takeEvery } from 'redux-saga/effects';
import * as authenticationSaga from "./authentication-sagas";
import * as actionTypes from './../actions/actionTypes';

function* rootSaga() {
    yield [
        takeEvery(actionTypes.LOGIN, authenticationSaga.authenticate),
        takeEvery(actionTypes.LOGOUT, authenticationSaga.logout)
    ];
}

export default rootSaga;