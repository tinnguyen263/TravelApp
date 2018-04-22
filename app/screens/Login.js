import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image
} from 'react-native';
import {PrimaryButton} from "../components/buttons";
import {TextInput} from "../components/inputs";
import {Card} from "../components/layouts";

const appStyles = {
    primaryColor: '#518ffb',
    primaryTextColor: '#000',
    dimmedTextColor: '#D0D0D0'
};

export default class LoginPage extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    _authenticate = (email, password) => {
        return fetch(`http://travel-app.speedup.world/api/login?email=${email}&password=${password}`, {
            method: 'POST'
        });
    };

    _login = () => {
        this._authenticate(this.state.email, this.state.password).then(response => response.json())
            .then(responseJson => {
                if (responseJson.status) {
                    this._navigateHome();
                }
                else {
                    alert(responseJson.message);
                }
            })
            .catch(error => console.error(error));
    };

    _register = () => {
        this.props.navigation.navigate('Register');
    };

    _navigateHome = () => {
        this.props.navigation.navigate('Home');
    };

    _setMockData = () => {
        this.setState(() => {
            return {
                email: 'chung.pv0795@gmail.com',
                password: '123456'
            }
        });
    };

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../images/bg.png')}>

                <View>
                    <View style={styles.logoAndAppName}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/logo.png')}/>
                        <Text style={styles.appName}>
                            Archer
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <Card
                            title={'LOGIN'}
                            cardContent={
                                <View style={{marginTop: 8}}>
                                    <TextInput
                                        icon={require('../../images/email.png')}
                                        placeholder={'E-mail'}
                                        value={this.state.email}
                                        onChange={email => this.setState({email})}/>

                                    <TextInput
                                        icon={require('../../images/lock.png')}
                                        placeholder={'Password'}
                                        value={this.state.password}
                                        onChange={password => this.setState({password})}/>

                                    <Text style={[styles.hyperLink, styles.forgotPasswordText]}
                                          onPress={this._setMockData}>
                                        Forgot passwords?
                                    </Text>
                                </View>
                            }
                            cardAction={
                                <PrimaryButton
                                    buttonText={'LOGIN'}
                                    onPress={this._login}>
                                </PrimaryButton>
                            }
                        />
                    </View>

                    <View>
                        <Text
                            style={[styles.hyperLink, styles.registerText]}
                            onPress={this._register}>
                            Register a new account!
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    /* COMMON */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hyperLink: {
        color: appStyles.primaryColor,
        textDecorationLine: 'underline'
    },

    /* Logo and App name */
    logoAndAppName: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24
    },
    logo: {
        width: 48,
        height: 48
    },
    appName: {
        height: 48,
        fontSize: 36,
        lineHeight: 48,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 16,
        color: appStyles.primaryColor
    },

    form: {
        width: 250
    },

    forgotPasswordText: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    registerText: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16
    }
});
