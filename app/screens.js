/* eslint-disable import/no-named-as-default,import/no-named-as-default-member,no-console */
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import HomePage from "./screens/home";
import LoginPage from "./screens/login";
import RegisterPage from "./screens/register";

export function registerScreens(store, Provider) {
    Navigation.registerComponent('travelapp.home', () => HomePage, store, Provider);
    Navigation.registerComponent('travelapp.login', () => LoginPage, store, Provider);
    Navigation.registerComponent('travelapp.register', () => RegisterPage, store, Provider);
}

export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
        willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
        didAppear: ({ screen, startTime, endTime, commandType }) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
        willDisappear: ({ screen }) => console.log(`Screen will disappear ${screen}`),
        didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
    }).register();
}