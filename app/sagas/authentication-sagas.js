/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects';
import api from './../api';
import { saveAuthenticationData, deleteAuthenticationData } from "../actions/authentication-actions";
import { hideLoading, showLoading, showMessage } from "../actions/app-state-actions";


export function* authenticate(action) {
    try {
        yield put(showLoading());
        const response = yield call(api.authenticate, action.payload.email, action.payload.password);
        if (response.status) {
            yield put(saveAuthenticationData(response.data));
        } else {
            yield put(showMessage(response.message));
        }
        yield put(hideLoading());
        yield 0;
    } catch (e) {
        yield put(hideLoading());
        yield put(showMessage(e.message));
    }
}

export function* logout(action) {
    try {
        yield put(showLoading());
        yield put(deleteAuthenticationData());
        yield put(hideLoading());
        yield 0;
    } catch (e) {
        yield put(hideLoading());
        yield put(showMessage(e.message));
    }
}