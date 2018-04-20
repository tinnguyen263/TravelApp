import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet, ImageBackground, Text, TouchableHighlight} from "react-native";


class MyFancyButton extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.fancyButton]}
                onPress={this.props.onPress}>
                <ImageBackground
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    source={require('../../../images/btn_login.png')}>
                    <Text style={styles.text}>
                        {this.props.buttonText}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    fancyButton: {
        height: 24,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 4,
        overflow: 'hidden'
    },
    text: {
        color: '#FFF',
        fontSize: 12
    }
});

MyFancyButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string
};

export default MyFancyButton;
