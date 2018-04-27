/* eslint-disable import/no-named-as-default,import/no-named-as-default-member */
import { Navigation } from 'react-native-navigation';
import HomePage from "./modules/home";
import LoginPage from "./modules/login";
import RegisterPage from "./modules/register";

export default function registerScreens(store, Provider) {
    Navigation.registerComponent('travelapp.home', () => HomePage, store, Provider);
    Navigation.registerComponent('travelapp.login', () => LoginPage, store, Provider);
    Navigation.registerComponent('travelapp.register', () => RegisterPage, store, Provider);
}