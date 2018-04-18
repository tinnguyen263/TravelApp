/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('./images/bg.png')}>

                <View>
                    <View style={styles.headerContainer}>
                        <Image
                            style={styles.logo}
                            source={require('./images/logo.png')}/>
                        <Text style={styles.appName}>
                            Archer
                        </Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.formHeader}>
                            <Text>
                                Login
                            </Text>
                        </View>
                        <View style={styles.formContent}>
                            <View style={styles.formInput}>
                                <Image
                                    source={require('./images/email.png')}
                                    style={styles.inputIcon}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'E-mail'}
                                    underlineColorAndroid="transparent">
                                </TextInput>
                            </View>

                            <TextInput
                                placeholder={'Password'}>
                            </TextInput>

                            <Text>
                                Forgot passwords?
                            </Text>

                            <Button
                                title={'Login'}>
                            </Button>
                        </View>
                    </View>

                    <View>
                        <Text>
                            Register a new account!
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16
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
        color: '#7D7DF0'
    },
    formContainer: {
        flexWrap: 'wrap',
        alignItems: 'stretch',
        flexDirection:'column',
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
        height: 36,
        padding: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#FF5050'
    },
    formContent: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 16
    },
    formInput: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#D0D0D0'
    },
    inputIcon: {
        flexWrap: 'wrap',
        width: 16,
        height: 14,
        marginTop: 8,
        marginBottom: 2
    },
    input: {
        flex: 1
    },
});
