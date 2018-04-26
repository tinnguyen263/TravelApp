/* eslint-disable global-require,react/prop-types,no-undef */
import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ImageBackground,
    ScrollView
} from 'react-native';
import { PropTypes } from 'prop-types';
import { styles } from './styles';
import { BottomNav } from '../../components/bottom-nav/index';
import { ListItem } from '../../components/list/index';

const HomePage = props => {
    // eslint-disable-next-line no-console
    console.warn(props);
    // componentDidMount() {
    //     // this._checkAuthentication();
    // }

    // _checkAuthentication() {
    //     AsyncStorage.getItem('token')
    //         .then(token => {
    //             if (token !== null) {
    //                 this.setState({ ready: true });
    //             } else {
    //                 this.setState({ ready: false });
    //                 this._requireLogin();
    //             }
    //         })
    //         .catch(() => {
    //             this.setState({ ready: false });
    //             this._requireLogin();
    //         });
    // }
    //
    // _requireLogin() {
    //     this._navigateLoginPage();
    // }
    //
    // _navigateLoginPage() {
    //     this.props.navigator.push({ screen: 'travelapp.login' });
    // }
    //
    // _renderLoading() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Loading...</Text>
    //         </View>
    //     );
    // }

    const _renderReady = () => (
        <View style={styles.container}>

            <View style={styles.pageHeader}>
                <Text style={styles.title}>
                        Home Page
                    </Text>
            </View>

            <ScrollView style={styles.pageContent}>
                <Text style={styles.listHeader}>New listings near you</Text>
                {props.listItems.map((city, cityIndex) => (
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
                                        price={flight.price}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                        ))}
            </ScrollView>

            <TouchableHighlight style={[styles.searchButton]}>
                <ImageBackground
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    source={require('../../../images/home_search.png')}
                />
            </TouchableHighlight>

            <BottomNav
                items={props.navItems}
                onSelect={() => {}}
            />
        </View>
        );

    // if (this.state.ready) {
    //     return this._renderLoaded();
    // }
    // return this._renderLoading();
    return _renderReady();
};

HomePage.propTypes = {
    navItems: PropTypes.array.isRequired,
    listItems: PropTypes.array.isRequired,
    navigator: PropTypes.object
};

HomePage.navigatorStyle = {
    navBarHidden: true
};

export default HomePage;

