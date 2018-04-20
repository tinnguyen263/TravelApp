import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image
} from 'react-native';
import {PrimaryButton} from "../components/buttons";
import {TextInput} from "../components/text-input";
import {Card} from "../components/card";

const appStyles = {
    primaryColor: '#518ffb',
    primaryTextColor: '#000',
    dimmedTextColor: '#D0D0D0'
};

export default class LoginPage extends React.Component {

    static navigationOptions = {
        header: null
    };

    _login = () => {
        this.props.navigation.navigate('Home');
    };

    _register = () => {
        this.props.navigation.navigate('Register');
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

                    <Card
                        title={'LOGIN'}
                        cardContent={
                            <View>
                                <TextInput
                                    icon={require('../../images/email.png')}
                                    placeholder={'E-mail'}/>

                                <TextInput
                                    icon={require('../../images/lock.png')}
                                    placeholder={'Password'}/>

                                <Text style={[styles.hyperLink, styles.forgotPasswordText]}>
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
