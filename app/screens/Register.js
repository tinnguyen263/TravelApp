import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

type Props = {};
export default class RegisterPage extends Component<Props> {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Register
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /* COMMON */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
