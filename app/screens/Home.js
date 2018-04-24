import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    ImageBackground,
    ScrollView,
    AsyncStorage
} from 'react-native';
import {BottomNav} from '../components/bottom-nav';
import {ListItem} from '../components/list';

const navItems = [
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
    }
]
const listItems = [
    {
        cityName: 'Ho Chi Minh City, Viet Nam',
        listItems: [
            {
                airportName: 'TAN SON NHAT AIRPORT',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'SILVERKRIS',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            }
        ]
    },
    {
        cityName: 'East Berlin, United States',
        listItems: [
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            },
            {
                airportName: 'AIRPORT NAME',
                image: require('./../../images/flight_temp.png'),
                loungeName: 'LOUNGE NAME',
                time: '02/17/2018 • 06:10 - 13:10',
                guest: 15,
                isAvailable: true,
                price: 99
            }
        ]
    }
]

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.props.navigator.setStyle({
            navBarHidden: true
        });

        this.state = {
            ready: false,
            navItems: navItems,
            listItems: listItems
        };

    }

    componentDidMount() {
        this._checkAuthentication();
    }

    _checkAuthentication = () => {
        AsyncStorage.getItem('token')
            .then((token) => {
                if (token !== null) {
                    this.setState({ready: true});
                }
                else {
                    this.setState({ready: false});
                    this._requireLogin();
                }
            })
            .catch(() => {
                this.setState({ready: false});
                this._requireLogin();
            });
    };

    _requireLogin = () => {
        this._navigateLoginPage();
    };

    _navigateLoginPage = () => this.props.navigator.push({screen: 'travelapp.loginPage'});

    _renderLoading = () => {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading...</Text>
            </View>
        );
    };

    _renderLoaded() {
        return (
            <View style={styles.container}>

                <View style={styles.pageHeader}>
                    <Text style={styles.title}>
                        Home Page
                    </Text>
                </View>

                <ScrollView style={styles.pageContent}>
                    <Text style={styles.listHeader}>New listings near you</Text>
                    {this.state.listItems.map((city, cityIndex) => (
                        <View key={`c${cityIndex}`}>
                            <Text style={styles.subListHeader}>
                                {city.cityName}
                            </Text>
                            <View style={styles.subList}>
                                {city.listItems.map((flight, flightIndex) => (
                                    <View style={styles.listItem} key={`c${cityIndex}f${flightIndex}`}>
                                        <ListItem
                                            image={flight.image}
                                            airportName={flight.airportName}
                                            loungeName={flight.loungeName}
                                            time={flight.time}
                                            guest={flight.guest}
                                            isAvailable={flight.isAvailable}
                                            price={flight.price}/>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </ScrollView>

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
                    items={this.state.navItems}
                    onSelect={() => {
                    }}/>
            </View>
        );
    }

    render() {
        if (this.state.ready) {
            return this._renderLoaded();
        }
        return this._renderLoading();
    }
}

const
    styles = StyleSheet.create({
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
            fontSize: 20,
            color: '#FFF'
        },
        pageContent: {
            flex: 1,
            backgroundColor: '#F8F8F8',
            padding: 8
        },
        searchButton: {
            width: 48,
            height: 48,
            position: 'absolute',
            right: 16,
            top: 24
        },

        listHeader: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 8,
            marginBottom: 8
        },
        subList: {
            marginTop: 4,
            marginBottom: 4
        },
        subListHeader: {
            fontSize: 14,
            color: '#999'
        },
        listItem: {
            marginTop: 2,
            marginBottom: 2
        }

    });
