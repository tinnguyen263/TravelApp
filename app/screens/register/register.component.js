/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ImageBackground,
    Text
} from 'react-native';
import { Card } from "../../components/layouts/index";
import { TextInput, ConfirmInput } from "../../components/inputs/index";
import { PrimaryButton } from "../../components/buttons/index";
import styles from "./register.styles";

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this._navigateBack = this._navigateBack.bind(this);
        this._register = this._register.bind(this);
    }

    _register() {
        alert('Function not implemented!');
    }

    _navigateBack() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../../images/bg.png')}>

                <Text
                    style={[
                        styles.hyperLink,
                        {
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            fontWeight: 'bold',
                            color: '#518ffb'
                        }
                    ]}
                    onPress={this._navigateBack}>
                    Back
                </Text>

                <View style={styles.form}>
                    <Card
                        title={'REGISTER ACCOUNT'}
                        cardContent={
                            <View>
                                <TextInput
                                    icon={require('../../../images/user.png')}
                                    placeholder={'First name'}
                                />

                                <TextInput
                                    icon={require('../../../images/user.png')}
                                    placeholder={'Last name'}
                                />

                                <View style={[styles.twoColumnLayout]}>
                                    <View style={[styles.column]}>
                                        <TextInput
                                            icon={require('../../../images/phone.png')}
                                            placeholder={'Country code'}
                                        />
                                    </View>
                                    <View style={{ width: 8 }} />
                                    <View style={[styles.column]}>
                                        <TextInput
                                            style={[styles.column]}
                                            placeholder={'Phone number'}
                                        />
                                    </View>
                                </View>

                                <TextInput
                                    icon={require('../../../images/world.png')}
                                    placeholder={'Country'}
                                />


                                <TextInput
                                    icon={require('../../../images/lock.png')}
                                    placeholder={'Password'}
                                />

                                <TextInput
                                    icon={require('../../../images/lock.png')}
                                    placeholder={'Confirm password'}
                                />

                                <View style={styles.confirm}>
                                    <ConfirmInput
                                        name={'confirm'}
                                        text={'Accept terms and conditions'}
                                        onChange={(name, checked) => {}}
                                    />
                                </View>
                            </View>
                        }
                        cardAction={
                            <PrimaryButton
                                buttonText={'Register'}
                                onPress={this._register}
                            />
                        }
                    />
                </View>

            </ImageBackground>
        );
    }
}

RegisterPage.propTypes = {
    navigator: PropTypes.object.isRequired
};

RegisterPage.navigatorStyle = {
    navBarHidden: true
};

export default RegisterPage;