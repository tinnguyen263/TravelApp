import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from "react-native";
import Checkbox from 'react-native-custom-checkbox'

class ConfirmInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    _toggleCheckbox = () => {
        this.setState({
            checked: !this.state.checked
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Checkbox
                    style={{
                        borderWidth: 1,
                        borderColor: '#A0A0A0',
                        borderRadius: 2
                    }}
                    size={12}
                    name={this.props.name}
                    checked={this.state.checked}
                    onChange={this.props.onChange}/>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    text: {
        flex: 1,
        marginLeft: 8,
        fontSize: 10
    }
});

ConfirmInput.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

export default ConfirmInput;
