/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { PersistGate, persistStore } from "redux-persist";
import initStore from './app/store/configureStore';
import registerScreens from './app/screens';
import * as actionTypes from './app/constants/actionTypes';

const store = initStore();

registerScreens(store, Provider);

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

