import { Navigation } from 'react-native-navigation';
import HomePage from "./Home";
import LoginPage from "./Login";
import RegisterPage from "./Register";

export function registerScreens() {
    Navigation.registerComponent('travelapp.homePage', () => HomePage);
    Navigation.registerComponent('travelapp.loginPage', () => LoginPage);
    Navigation.registerComponent('travelapp.registerPage', () => RegisterPage);
}