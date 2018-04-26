import { connect } from "react-redux";
import HomePage from './home';

const mapStateToProps = state => ({
    listItems: state.flights ? state.flights : [],
    navItems: state.bottomNavItems ? state.bottomNavItems : []
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(HomePage);