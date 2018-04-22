import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet, ImageBackground, TouchableHighlight} from "react-native";


class ImageButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={[styles.container]}
                onPress={this.props.onPress}>
                <ImageBackground
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    source={this.props.image}>
                    {this.props.children}
                </ImageBackground>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
});

ImageButton.propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.any.isRequired
};

export default ImageButton;
