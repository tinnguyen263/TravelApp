import {StackNavigator} from 'react-navigation';

import LoginPage from '../screens/Login';
import HomePage from "../screens/Home";
import RegisterPage from "../screens/Register";

const AppNavigator = StackNavigator({
    Login: {screen: LoginPage},
    Home: {screen: HomePage},
    Register: {screen: RegisterPage}
});

export default AppNavigator;