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
import { styles } from './home.styles';
import { BottomNav } from '../../components/bottom-nav/index';
import { ListItem } from '../../components/list/index';
import ImageButton from "../../components/buttons/image-button";

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this._navigateLoginPage = this._navigateLoginPage.bind(this);
    }

    componentDidMount() {
        // if user is not logged in, redirect to login screen
        if (!this.props.isLoggedIn) {
            this._navigateLoginPage();
        }
    }

    componentDidUpdate() {
        // if user is not logged in, redirect to login screen
        if (!this.props.isLoggedIn) {
            this._navigateLoginPage();
        }
    }

    // noinspection JSMethodCanBeStatic
    _navigateLoginPage() {
        this.props.navigator.push({ screen: 'travelapp.login' });
    }

    render() {
        if (this.props.isLoading || !this.props.isLoggedIn) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Loading</Text>
                </View>
            );
        }


        const listItems = this.props.listItems.map((city, cityIndex) => (
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
        ));

        return (
            <View style={styles.container}>
                <View style={styles.pageHeader}>
                    <Text style={styles.title}>
                        {this.props.userEmail}
                    </Text>
                    <ImageButton
                            image={require('./../../../images/exit.png')}
                            onPress={this.props.logout}>
                        <View style={{ width: 20, height: 20 }} />
                    </ImageButton>
                </View>

                <ScrollView style={styles.pageContent}>
                    <Text style={styles.listHeader}>New listings near you</Text>
                    {listItems}
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
                    items={this.props.navItems}
                    onSelect={() => {}}
                />
            </View>
        );
    }
}

HomePage.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    isLoggedIn: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired,
    listItems: PropTypes.array.isRequired,
    userEmail: PropTypes.string,
    navigator: PropTypes.object,
    logout: PropTypes.func,
    isLoading: PropTypes.bool
};

HomePage.navigatorStyle = {
    navBarHidden: true
};

export default HomePage;

