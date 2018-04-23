import React from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';

class Loader extends React.Component {
    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.loading}
                onRequestClose={() => {
                }}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={this.props.loading}/>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

Loader.propTypes = {
    loading: PropTypes.bool.isRequired
};


export default Loader;