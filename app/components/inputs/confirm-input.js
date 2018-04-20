import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet} from "react-native";
import CheckBox from 'react-native-check-box'

class ConfirmInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    _toggleCheckbox = () => {
        this.state.checked = !this.state.checked;
        if (this.props.onchange) {
            this.props.onchange();
        }
    };

    render() {
        return (
            <CheckBox
                rightTextStyle={{
                    flex: 1,
                    marginLeft: 8,
                    fontSize: 10,
                    color: '#518ffb'
                }}
                onClick={this._toggleCheckbox}
                isChecked={this.state.checked}
                rightText={this.props.text}
            />
        );
    }
}

ConfirmInput.propTypes = {
    text: PropTypes.string.isRequired,
    onchange: PropTypes.func
};

// TODO: style check box

export default ConfirmInput;
