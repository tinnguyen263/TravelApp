import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    TouchableHighlight
} from 'react-native';

const appStyles = {
    primaryColor: '#518ffb',
    primaryTextColor: '#000',
    dimmedTextColor: '#D0D0D0'
};

export default class LoginPage extends React.Component {

    static navigationOptions = {
        header: null
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

                    <View style={styles.formContainer}>
                        <View style={styles.formHeader}>
                            <Text style={styles.formHeaderTitle}>
                                LOGIN
                            </Text>
                        </View>
                        <View style={styles.formContent}>
                            <View style={styles.formInput}>
                                <Image
                                    source={require('../../images/email.png')}
                                    style={styles.inputIcon}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'E-mail'}
                                    placeholderTextColor={appStyles.dimmedTextColor}
                                    underlineColorAndroid="transparent">
                                </TextInput>
                            </View>

                            <View style={styles.formInput}>
                                <Image
                                    source={require('../../images/lock.png')}
                                    style={styles.inputIcon}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Password'}
                                    placeholderTextColor={appStyles.dimmedTextColor}
                                    underlineColorAndroid="transparent">
                                </TextInput>
                            </View>

                            <Text style={[styles.hyperLink, styles.forgotPasswordText]}>
                                Forgot passwords?
                            </Text>
                        </View>

                        <View style={styles.formAction}>
                            <TouchableHighlight
                                style={[styles.loginButton]}>
                                <ImageBackground
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    source={require('../../images/btn_login.png')}>
                                    <Text style={{color: '#FFF', fontSize: 12}}>
                                        LOGIN
                                    </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.hyperLink, styles.registerText]}>
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

    /* FORM LAYOUT */
    formContainer: {
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flexDirection: 'column',
        width: 250,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 12,
            height: 12
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    formHeader: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 48,
        padding: 16,
        borderBottomWidth: 2,
        borderBottomColor: appStyles.primaryColor
    },
    formHeaderTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    formContent: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 24,
        paddingBottom: 8
    },
    formAction: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 16
    },

    /* Form input */
    formInput: {
        height: 24,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: appStyles.dimmedTextColor,
    },
    inputIcon: {
        flexWrap: 'wrap',
        width: 16,
        height: 16,
        resizeMode: 'center'
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 10,
        height: 36
    },

    forgotPasswordText: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    loginButton: {
        height: 24,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 4,
        overflow: 'hidden'
    },
    registerText: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16
    }
});
