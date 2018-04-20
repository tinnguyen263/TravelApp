import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet, Image, TextInput, View} from "react-native";

class MyTextInput extends React.Component {
    render() {
        let styles = StyleSheet.create({
            inputContainer: {
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
                borderBottomColor: '#D0D0D0',
            },
            inputIcon: {
                flexWrap: 'wrap',
                width: 16,
                height: 16,
                resizeMode: 'center'
            },
            input: {
                flex: 1,
                marginLeft: this.props.icon ? 8 : 0,
                fontSize: 10,
                height: 36
            },
        });
        return (
            <View style={styles.inputContainer}>
                {this.props.icon &&
                <Image
                    source={this.props.icon}
                    style={styles.inputIcon}/>
                }
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={'#D0D0D0'}
                    underlineColorAndroid="transparent">
                </TextInput>
            </View>
        )
    }
}

MyTextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.any
};

export default MyTextInput;
