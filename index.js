/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import configureStore from './app/store/configureStore';
import registerScreens from './app/screens';
import initialState from "./app/reducers/initialState";

const store = configureStore(initialState);

registerScreens(store, Provider);

// noinspection JSIgnoredPromiseFromCall
Navigation.startSingleScreenApp({
    screen:
    {
        screen: 'travelapp.home'
    }
});
