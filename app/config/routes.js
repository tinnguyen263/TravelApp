import {StackNavigator} from 'react-navigation';

import LoginPage from '../screens/Login';
import HomePage from "../screens/Home";
import RegisterPage from "../screens/Register";

const AppNavigator = StackNavigator({
    Login: {screen: LoginPage},
    Register: {screen: RegisterPage},
    Home: {screen: HomePage}
});

export default AppNavigator;