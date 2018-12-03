/* eslint-disable global-require */
import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    BackHandler
} from 'react-native';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../../components/buttons/index';
import { TextInput } from '../../components/inputs/index';
import { Card } from '../../components/layouts/index';
import { Loader } from '../../components/modal/index';
import styles from './login.styles';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this._navigateRoot = this._navigateRoot.bind(this);
        this._navigateRegister = this._navigateRegister.bind(this);
        this._setMockData = this._setMockData.bind(this);
        this._submitLogin = this._submitLogin.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentDidUpdate() {
        if (this.props.isLoggedIn) {
            this._navigateRoot();
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    _navigateRoot() {
        this.props.navigator.popToRoot();
    }

    _navigateRegister() {
        this.props.navigator.push({
            screen: 'travelapp.register'
        });
    }

    _setMockData() {
        this.setState({
            email: 'chung.pv0795@gmail.com',
            password: '123456'
        });
    }

    _submitLogin() {
        this.props.login(this.state.email, this.state.password);
    }

    handleBackButton() {
        return true;
    }

    render() {
        return (
            <ImageBackground
                 style={styles.container}
                 source={require('../../../images/bg.png')}>

                <View>
                    <View style={styles.logoAndAppName}>
                        <Image
                             style={styles.logo}
                             source={require('../../../images/logo.png')}
                        />
                        <Text style={styles.appName}>
                             Archer
                         </Text>
                    </View>

                    <View style={styles.form}>
                        <Card
                             title={'LOGIN'}
                             cardContent={
                                 <View style={{ marginTop: 8 }}>
                                     <TextInput
                                         icon={require('../../../images/email.png')}
                                         placeholder={'E-mail'}
                                         value={this.state.email}
                                         onChange={email => this.setState({ email })}
                                     />

                                     <TextInput
                                         icon={require('../../../images/lock.png')}
                                         placeholder={'Password'}
                                         value={this.state.password}
                                         onChange={password => this.setState({ password })}
                                     />

                                     <Text
                                         style={[styles.hyperLink, styles.forgotPasswordText]}
                                         onPress={this._setMockData}>
                                         Forgot passwords?
                                     </Text>
                                 </View>
                             }
                             cardAction={
                                 <PrimaryButton
                                     buttonText={'LOGIN'}
                                     onPress={this._submitLogin}
                                 />
                             }
                        />
                    </View>

                    <View>
                        <Text
                             style={[styles.hyperLink, styles.registerText]}
                             onPress={this._navigateRegister}>
                             Register a new account!
                        </Text>
                    </View>
                </View>

                <Loader loading={this.props.isLoading} />

            </ImageBackground>
        );
    }
}

LoginPage.propTypes = {
    isLoading: PropTypes.bool,
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    navigator: PropTypes.object
};

LoginPage.navigatorStyle = {
    navBarHidden: true
};

export default LoginPage;

