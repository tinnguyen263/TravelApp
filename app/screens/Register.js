import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';
import {Card} from "../components/layouts";
import {TextInput} from "../components/inputs";
import {PrimaryButton} from "../components/buttons";

type Props = {};
export default class RegisterPage extends Component<Props> {

    static navigationOptions = {
        header: null
    };

    _register = () => {
    };

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../images/bg.png')}>

                <View style={styles.form}>
                    <Card
                        title={'REGISTER ACCOUNT'}
                        cardContent={
                            <View>
                                <TextInput
                                    icon={require('../../images/user.png')}
                                    placeholder={'First name'}/>

                                <TextInput
                                    icon={require('../../images/user.png')}
                                    placeholder={'Last name'}/>

                                <View style={[styles.twoColumnLayout]}>
                                    <View style={[styles.column]}>
                                        <TextInput
                                            icon={require('../../images/phone.png')}
                                            placeholder={'Country code'}/>
                                    </View>
                                    <View style={{width: 8}}/>
                                    <View style={[styles.column]}>
                                        <TextInput
                                            style={[styles.column]}
                                            placeholder={'Phone number'}/>
                                    </View>
                                </View>

                                <TextInput
                                    icon={require('../../images/world.png')}
                                    placeholder={'Country'}/>


                                <TextInput
                                    icon={require('../../images/lock.png')}
                                    placeholder={'Password'}/>

                                <TextInput
                                    icon={require('../../images/lock.png')}
                                    placeholder={'Confirmaaa password'}/>
                            </View>
                        }
                        cardAction={
                            <PrimaryButton
                                buttonText={'Register'}
                                onPress={this._register}>
                            </PrimaryButton>
                        }
                    />
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
        alignItems: 'center',
    },
    form: {
        width: 300
    },
    twoColumnLayout: {
        flexDirection: 'row'
    },
    column: {
        flex: 1
    }
});
