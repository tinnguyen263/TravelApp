/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}
