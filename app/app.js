/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { persistStore } from "redux-persist";
import initStore from './store/configureStore';
import { registerScreens, registerScreenVisibilityListener } from './screens';
import * as actionTypes from './actions/actionTypes';

const store = initStore();

registerScreens(store, Provider);
registerScreenVisibilityListener();

// noinspection JSIgnoredPromiseFromCall
Navigation.startSingleScreenApp({
    screen: {
        screen: 'travelapp.home'
    }
});

persistStore(store, null, () => {
    store.dispatch({
        type: actionTypes.APP_SET_LOADING,
        payload: {
            isLoading: false
        }
    });
});
