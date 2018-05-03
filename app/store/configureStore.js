/* eslint-disable global-require */
/* eslint-disable no-undef */
import { applyMiddleware, createStore } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import initialState from "../initialState";
import rootSaga from "../sagas";

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export default function initStore() {
    const store = createStore(persistedReducer, initialState, applyMiddleware(thunk, sagaMiddleware, logger));
    sagaMiddleware.run(rootSaga);
    return store;
}