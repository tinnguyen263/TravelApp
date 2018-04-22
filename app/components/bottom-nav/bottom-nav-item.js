import React from "react";
import PropTypes from "prop-types"
import {Text, TouchableNativeFeedback, StyleSheet, Image, View} from "react-native";

class BottomNavItem extends React.Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Image
                        style={styles.icon}
                        source={this.props.active ? this.props.iconActive : this.props.icon}/>
                    <Text style={this.props.active ? styles.textActive : styles.text}>
                        {this.props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 48,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 16,
        height: 16,
        margin: 4,
        resizeMode: 'center'
    },
    text: {
        height: 12,
        fontSize: 8,
        color: '#949494'
    },
    textActive: {
        height: 12,
        fontSize: 8,
        color: '#006496'
    }
});

BottomNavItem.propTypes = {
    icon: PropTypes.any,
    iconActive: PropTypes.any,
    title: PropTypes.string,
    active: PropTypes.bool,
    onPress: PropTypes.func
};

export default BottomNavItem;