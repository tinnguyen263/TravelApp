import {StackNavigator} from 'react-navigation';

import LoginPage from '../screens/Login';
import HomePage from "../screens/Home";

const AppNavigator = StackNavigator({
    Login: {screen: LoginPage},
    Home: {screen: HomePage}
});

export default AppNavigator;