import React from "react";
import PropTypes from "prop-types"
import {View, StyleSheet} from "react-native";
import BottomNavItem from "./bottom-nav-item";

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selectedIndex ? props.selectedIndex : 0
        };
    }

    _select = (index) => {
        this.setState({selected: index});
        if (this.props.onSelect) {
            this.props.onSelect(index);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.props.items.map((item, index) => (
                    <BottomNavItem
                        style={styles.item}
                        key={index}
                        icon={item.icon}
                        iconActive={item.iconActive}
                        title={item.title}
                        active={(index === this.state.selected)}
                        onPress={() => this._select(index)}
                    />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        elevation: 2
    },
    item: {
        flex: 1
    }
});

BottomNav.propTypes = {
    items: PropTypes.array,
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
};

export default BottomNav;