import { connect } from "react-redux";
import HomePage from './home.component';
import { logout } from './home.actions';

const mapStateToProps = state => ({
    listItems: state.flights,
    navItems: state.bottomNavItems,
    isLoggedIn: state.auth.isLoggedIn,
    userEmail: state.auth.email
});

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);