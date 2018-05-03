import { takeLatest } from 'redux-saga/effects';
import { authenticate } from "./authentication-sagas";
import * as actionTypes from './../actions/actionTypes';

function* rootSaga() {
    yield [
        takeLatest(actionTypes.LOGIN, authenticate)
        // takeLatest(actionTypes.LOGOUT, ()=>{})
    ];
}

export default rootSaga;