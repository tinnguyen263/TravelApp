import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground
} from 'react-native';
import ImageButton from "../buttons/image-button";

class ListItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image style={styles.image} source={this.props.image}/>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={styles.headerText}>{this.props.airportName}</Text>
                    <View style={styles.detail}>
                        <View style={styles.leftDetail}>
                            <Text style={styles.subHeaderText}>{this.props.loungeName}</Text>
                            <Text style={styles.subHeaderText}>{this.props.time}</Text>
                        </View>
                        <View style={styles.rightDetail}>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.guest}</Text>
                                <Text style={[styles.normalText, {marginLeft: 2}]}>guest(s)</Text>
                            </View>
                            <View style={styles.iconAndText}>
                                <Image
                                    style={styles.iconAndText_icon}
                                    source={this.props.isAvailable ?
                                        require('./../../../images/available.png') :
                                        require('./../../../images/available-gray.png')}/>
                                <Text style={[styles.iconAndText_text, styles.normalText]}>Available</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={[styles.iconAndText, {marginRight: 8}]}>
                                <Image
                                    style={styles.iconAndText_icon}
                                    source={require('./../../../images/share.png')}/>
                                <Text style={[styles.iconAndText_text, styles.normalText]}>Share</Text>
                            </View>
                            <View style={[styles.iconAndText, {marginRight: 8}]}>
                                <Image
                                    style={styles.iconAndText_icon}
                                    source={require('./../../../images/heart.png')}/>
                                <Text style={[styles.iconAndText_text, styles.normalText]}>Like</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{width:110, borderRadius: 4}}>
                                <ImageButton image={require('./../../../images/flight_send_btn.png')}>
                                    <Text style={[styles.normalText,{margin: 2, color: '#FFF'}]}>Send Request</Text>
                                </ImageButton>
                            </View>
                        </View>
                    </View>
                </View>

                <ImageBackground
                    style={styles.priceContainer}
                    source={require('./../../../images/flight_rectangle.png')}>
                    <Text style={styles.price}>$99.00</Text>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    /* TEXT */
    normalText: {
        fontSize: 8
    },
    headerText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontSize: 10,
        color: '#999'
    },

    /* LAYOUT */
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 8,
        borderRadius: 4,
        elevation: 2
    },
    leftContainer: {
        width: 56
    },
    image: {
        width: 56,
        height: 56,
        resizeMode: 'center'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'stretch',
        paddingLeft: 8
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftDetail: {},
    rightDetail: {
        alignItems: 'flex-end'
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    /* ICON AND TEXT */
    iconAndText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconAndText_icon: {
        width: 8,
        height: 8,
        resizeMode: 'center'
    },
    iconAndText_text: {
        paddingLeft: 4
    },

    /* PRICE TAG */
    priceContainer: {
        position: 'absolute',
        width: 100,
        height: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        right: 0,
        paddingRight: 8
    },
    price: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 'bold'
    }
});

ListItem.propTypes = {
    image: PropTypes.object.isRequired,
    airportName: PropTypes.string.isRequired,
    loungeName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    guest: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired
};

export default ListItem;