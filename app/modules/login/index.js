import { connect } from "react-redux";
import LoginPage from "./login.component";
import { authenticate } from './login.actions';

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    onSubmitLogin: (username, password) => dispatch(authenticate(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);