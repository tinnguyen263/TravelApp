/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga';
import api from './../api';
import { saveAuthenticationData } from "./actions/authentication-actions";
import { hideLoading, showLoading, showMessage } from "./actions/app-state-actions";


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
    } catch (e) {
        yield put(showMessage(e.message));
    }
}