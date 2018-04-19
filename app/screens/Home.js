import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Home
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
