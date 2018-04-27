import { connect } from "react-redux";
import HomePage from './home.component';

const mapStateToProps = state => ({
    listItems: state.flights,
    navItems: state.bottomNavItems,
    isLoggedIn: state.auth.isLoggedIn,
    userEmail: state.auth.email
});

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(HomePage);