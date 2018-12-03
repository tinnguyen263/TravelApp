/* eslint-disable global-require */
export default {
    app: {
        isLoading: true,
        message: null
    },
    auth: {
        isLoggedIn: false,
        userName: null,
        email: null,
        token: null
    },
    bottomNavItems: [
        {
            title: 'Home',
            icon: require('../images/home_bottom.png'),
            iconActive: require('../images/home_bottom_hl.png')
        },
        {
            title: 'Activities',
            icon: require('../images/activity_bottom.png'),
            iconActive: require('../images/activity_bottom_hl.png')
        },
        {
            title: 'Add Listings',
            icon: require('../images/add_bottom.png'),
            iconActive: require('../images/add_bottom_hl.png')
        },
        {
            title: 'Notifications',
            icon: require('../images/notify_bottom.png'),
            iconActive: require('../images/notify_bottom_hl.png')
        },
        {
            title: 'Others',
            icon: require('../images/more_bottom.png'),
            iconActive: require('../images/more_bottom_hl.png')
        }
    ],
    flights: [
        {
            cityName: 'Ho Chi Minh City, Viet Nam',
            listItems: [
                {
                    airportName: 'TAN SON NHAT AIRPORT',
                    image: require('../images/flight_temp.png'),
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
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                },
                {
                    airportName: 'AIRPORT NAME',
                    image: require('../images/flight_temp.png'),
                    loungeName: 'LOUNGE NAME',
                    time: '02/17/2018 • 06:10 - 13:10',
                    guest: 15,
                    isAvailable: true,
                    price: 99
                }
            ]
        }
    ]
};
