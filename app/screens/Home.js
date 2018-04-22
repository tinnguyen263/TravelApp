import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import {BottomNav} from "../components/bottom-nav";
import ListItem from "../components/list/list-item";

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

                    <ListItem
                        image={require('./../../images/flight_temp.png')}
                        airportName={'TAN SON NHAT AIRPORT'}
                        loungeName={'SILVERKRIS'}
                        time={'02/17/2018 • 06:10 - 13:10'}
                        guest={15}
                        isAvailable={true}/>
                    <ListItem
                        image={require('./../../images/flight_temp.png')}
                        airportName={'TAN SON NHAT AIRPORT'}
                        loungeName={'SILVERKRIS'}
                        time={'02/17/2018 • 06:10 - 13:10'}
                        guest={15}
                        isAvailable={true}/>
                    <ListItem
                        image={require('./../../images/flight_temp.png')}
                        airportName={'TAN SON NHAT AIRPORT'}
                        loungeName={'SILVERKRIS'}
                        time={'02/17/2018 • 06:10 - 13:10'}
                        guest={15}
                        isAvailable={true}/>

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

                <BottomNav
                    items={[
                        {
                            title: 'Home',
                            icon: require('./../../images/home_bottom.png'),
                            iconActive: require('./../../images/home_bottom_hl.png'),
                        },
                        {
                            title: 'Activities',
                            icon: require('./../../images/activity_bottom.png'),
                            iconActive: require('./../../images/activity_bottom_hl.png'),
                        },
                        {
                            title: 'Add Listings',
                            icon: require('./../../images/add_bottom.png'),
                            iconActive: require('./../../images/add_bottom_hl.png'),
                        },
                        {
                            title: 'Notifications',
                            icon: require('./../../images/notify_bottom.png'),
                            iconActive: require('./../../images/notify_bottom_hl.png'),
                        },
                        {
                            title: 'Others',
                            icon: require('./../../images/more_bottom.png'),
                            iconActive: require('./../../images/more_bottom_hl.png'),
                        },

                    ]}
                    onSelect={() => {
                    }}/>
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
