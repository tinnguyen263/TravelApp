import React from "react";
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from "react-native";

class Card extends React.Component {
    render() {
        return (
            <View style={styles.formContainer}>

                <View style={styles.formHeader}>
                    <Text style={styles.formHeaderTitle}>
                        {this.props.title}
                    </Text>
                </View>

                <View style={styles.formContent}>
                    {this.props.cardContent}
                </View>

                <View style={styles.formAction}>
                    {this.props.cardAction}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 12,
            height: 12
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    formHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 48,
        padding: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#518ffb'
    },
    formHeaderTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    formContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 24,
        paddingTop: 8,
        paddingBottom: 8
    },
    formAction: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 16
    },
});

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cardContent: PropTypes.element,
    cardAction: PropTypes.element
};

export default Card;