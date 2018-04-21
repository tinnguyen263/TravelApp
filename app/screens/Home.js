import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ImageBackground
} from 'react-native';

export default class HomePage extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.pageHeader}>
                    <Text style={styles.title}>
                        Home Page
                    </Text>
                </View>

                <View style={styles.pageContent}>
                    <Text>
                        content
                    </Text>
                </View>

                <TouchableHighlight
                    style={[styles.searchButton]}>
                    <ImageBackground
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        source={require('./../../images/home_search.png')}/>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    /* COMMON */
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    pageHeader: {
        backgroundColor: '#006093',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF'
    },
    pageContent: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    searchButton: {
        width: 48,
        height: 48,
        position: 'absolute',
        right: 16,
        top: 24
    }
});
